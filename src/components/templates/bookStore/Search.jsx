import React from 'react';
import { GridContainer } from '@/components/modules';
import { Input, Button } from '@/components/elements';

const Search = () => {
    return (
        <GridContainer
            className={` bg-white-50 grid-cols-4  laptopS:grid-cols-2 mobileXL:grid-cols-1 place-items-center mt-4 p-16 gap-3`}
        >
            <div className="mb-2">
                <Input
                    placeholder={`Book Title`}
                    className={` bg-white-100 text-white-950 placeholder:text-white-950 w-[250px] indent-4 rounded-sm h-[40px]`}
                />
            </div>

            <div className="mb-2">
                <select
                    className={` bg-white-100 text-white-950 w-[250px] indent-4 rounded-sm h-[40px]`}
                    name=""
                    id=""
                >
                    <option>Book Categories</option>
                    <option> Fiction</option>
                    <option> Non-Fiction</option>
                    <option> Children</option>
                    <option> Business</option>
                    <option> Academic</option>
                    <option> Religious</option>
                </select>
            </div>

            <div className="mb-2">
                <select
                    className={` bg-white-100 text-white-950 w-[250px] indent-4 rounded-sm h-[40px]`}
                    name=""
                    id=""
                >
                    <option>Author</option>
                    <option>Wole Soyinka</option>
                    <option>Chinua Achebe</option>
                    <option>Chimamanda Adichie</option>
                    <option>Ben Okri</option>
                    <option>Ben Carson</option>
                    <option>Robert Kiyosaki</option>
                </select>
            </div>

            <div className=" mb-2">
                <Button className=" font-bold bg-pink-600 w-[250px] rounded-[40px] p-2 text-white-50">
                    Search
                </Button>
            </div>
        </GridContainer>
    );
};

export default Search;
