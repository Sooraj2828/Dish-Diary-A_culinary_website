import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Loading from './Loading';
import Searchbar from './Searchbar';
import RecipeCard from './RecipeCard';
import { fetchRecipeeasy, fetchRecipes, fetchRecipeshard } from '../utils';
import Button from './Button';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('paneer');
    const [time, setTime] = useState('');
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const fetchRecipe = async () => {
        setLoading(true);
        try {
            if (time === 20) {
                const data = await fetchRecipeeasy({ query, limit });
                setRecipes(data);
            } else if (time === 60) {
                const data = await fetchRecipeshard({ query, limit });
                setRecipes(data);
            } else {
                const data = await fetchRecipes({ query, limit });
                setRecipes(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchedRecipe = async (e) => {
        e.preventDefault();
        fetchRecipe();
    };

    const handleEasyClick = () => {
        setTime(20);
        setLimit(5);
    };

    const handleHardClick = () => {
        setTime(60);
        setLimit(5);
    };

    const showMore = () => {
        setLimit((prev) => prev + 10);
    };

    useEffect(() => {
        setLoading(true);
        fetchRecipe();
    }, [time, limit]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="w-full">
            <h2 id="Level" className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
                Choose your level
            </h2>
            <div className="flex justify-center space-x-4">
                <div
                    className="group relative bg-yellow-600 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full cursor-pointer transition duration-300 transform hover:bg-yellow-700 hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={handleEasyClick}
                >
                    <div className="absolute inset-0 bg-yellow-600 rounded-full opacity-25 transition-opacity group-hover:opacity-0"></div>
                    <div className="relative text-white text-lg md:text-xl font-bold">
                        Easy
                    </div>
                </div>

                <div
                    className="group relative bg-red-600 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full cursor-pointer transition duration-300 transform hover:bg-red-700 hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={handleHardClick}
                >
                    <div className="absolute inset-0 bg-red-600 rounded-full opacity-25 transition-opacity group-hover:opacity-0"></div>
                    <div className="relative text-white text-lg md:text-xl font-bold">
                        Medium
                    </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    <Searchbar placeholder="e.g., Cake, Vegan, Chicken"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
                        }
                    />
                </form>
            </div>
            
            {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {recipes.map((item, index) => (
                                <RecipeCard recipe={item} key={index} />
                            ))}
                        </div>

                        <div className='flex w-full items-center justify-center py-10'>
                            <Button
                                title="Show More"
                                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}
                            />
                        </div>
                    </>
                ) : (
                    <div className='text-white w-full items-center justify-center py-10'>
                        <p className='text-center'>No Recipe Found</p>
                    </div>
                )
            }

           {/* Horizontal line divider */}
            <div className="mt-20">
                 <hr className="border-t border-gray-700" />
            </div>


            {/* About Us Section */}
            <div id="about-us" className="w-full bg-gradient-to-t from-black to-transparent p-4 md:p-6 lg:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-500 mb-4">About Us</h2>
                <p className="text-md md:text-lg text-center text-white">
                Welcome to Dish Diary! We're here to help you explore new flavors and make cooking fun. Our website is made to make cooking easy and exciting. 
                Whether you're an experienced chef or just starting out, we have a variety of recipes for you. 
                From simple recipes for busy weeknights to more challenging dishes for special occasions, we've got something for everyone!
                </p>
                <p className="text-md md:text-lg text-center text-white mt-4">
                    We believe cooking should be a joyful experience, and we're here to help you create
                    delicious dishes for yourself and your loved ones. Dive in and explore a world of
                    mouthwatering recipes, cooking tips, and inspiration!
                </p>
            </div>

            {/* Horizontal line divider */}
            <hr className="border-t border-gray-700 my-6" />

            {/* Contact Us Section */}
            <div id="contact-us" className="w-full bg-gradient-to-t from-black to-transparent p-4 md:p-6 lg:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-green-500 mb-4">Contact Us</h2>
                <p className="text-md md:text-lg text-center text-white">
                    We would love to hear from you! Whether you have a question, feedback, or suggestions, feel free to get in touch.
                    Our team is here to help you as per your needs.
                </p>
                <p className="text-md md:text-lg text-center text-white mt-4">
                    You can reach us by email at <a href="mailto:support@dishdiary.com" className="text-red-400 underline">support@dishdiary.com</a> 
                    or call us at <a href="tel:+6366278771" className="text-red-400 underline">+91 6366278771</a>.
                </p>
                <p className="text-md md:text-lg text-center text-white mt-4">
                    You can also follow us on social media for the latest updates and recipes:
                    <br />
                    <a href="https://facebook.com" className="text-red-400 underline">Facebook</a> , 
                    <a href="https://twitter.com" className="text-red-400 underline">Twitter</a> , 
                    and <a href="https://instagram.com" className="text-red-400 underline">Instagram</a>.
                </p>
            </div>
        </div>
    );
};

export default Recipes;
