"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Alert from "@/components/UI/Alert";
import ProductsGrid from "@/components/products/ProductsGrid";
import TitlePage from "@/components/UI/TitlePage";
import ProductsCounter from "@/components/products/ProductsCounter";
import FilterButton from "@/components/UI/FilterButton";
import FilterMenu from "@/components/UI/FilterMenu";

export default function Page({ searchParams }) {
    const [prices, setPrices] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const { take = 8 } = searchParams || {};
    const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const handleFilterMenuClose = () => {
        setFilterMenuIsOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/products?take=${take}`,
                    {
                        cache: "no-store",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const products = await res.json();
                setProducts(products);
                const pricesArray = products.data.map(
                    (product) => product.price
                );
                setPrices(pricesArray);
            } catch (err) {
                return err;
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(Math.max(...prices));
    }, [prices]);
    const handleFilterClick = () => {
        setFilterMenuIsOpen(true);
    };
    const applyFilter = (priceRange) => {
        setFilterMenuIsOpen(false);
        getFilteredProducts(priceRange);
        setPriceRange(priceRange);
        console.log(priceRange);
    };

    const getFilteredProducts = async (priceRange) => {};
    if (!products.data || products.success === false)
        return <Alert message={products.message} type="error" />;

    return (
        <div className="container mx-auto">
            <TitlePage title="Shop" />
            <FilterButton title="Filter" onClick={handleFilterClick} />
            <FilterMenu
                isOpen={filterMenuIsOpen}
                onRequestClose={handleFilterMenuClose}
                onClick={applyFilter}
                maxPrice={Math.max(...prices)}
            />
            <ProductsCounter productsLength={products.data.length} />
            <ProductsGrid products={products.data} />
            <div className="flex justify-center mb-24">
                {Number(take) <= products.data.length && (
                    <Link
                        className="transition ease-in-out delay-150 mt-4 inline-flex items-center px-4 py-3 text-sm border border-slate-500 font-medium text-center text-slate-500 bg-white hover:bg-slate-500 hover:text-white"
                        href={`/shop?take=${Number(take) + 8}`}
                    >
                        See more
                    </Link>
                )}
            </div>
        </div>
    );
}
