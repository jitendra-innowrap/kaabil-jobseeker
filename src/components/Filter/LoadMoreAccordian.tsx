'use client'
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion';
import { BiChevronDown, BiChevronUp, BiSearch } from 'react-icons/bi';
import Radio from './Radio';
import Check from './Check';
import { handleCommaForQuery } from '@/components/utils';
import { CheckOptions } from '@/Types/Filter';

export default function LoadMoreAccordian({ 
    fetchMoreItems, 
    header,
    fetch,
    selected,
    setSelected,
    isSearchable = false, 
    isRadio = false, 
    initialList = [], 
    itemsPerPage = 5,
    list
}) {
    const [items, setItems] = useState(initialList);
    const [isLoading, setIsLoading] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    
    const handleCheck = (item) => {
        // Convert the selected string to an array
        const selectedArray = selected ? selected?.split('|') : [];
    
        // Replace commas in the item name with a special character
        // const itemName = handleCommaForQuery(item.name);
        const itemName = item.name;
    
        // Check if the item is already selected
        const isSelected = selectedArray?.includes(itemName);
      
        if (isSelected) {
          // If selected, remove it from the selected array
          const updatedSelected = selectedArray?.filter((selectedItem) => selectedItem !== itemName);
          // Convert the updated selected array back to a string with the special character as delimiter
          setSelected(updatedSelected.join('|'));
        } else {
          // If not selected, add it to the selected array
          const updatedSelected = [...selectedArray, itemName];
          // Convert the updated selected array back to a string with the special character as delimiter
          setSelected(updatedSelected.join('|'));
        }
    };
    const handleRadio = (item) => {
        const isSelected = selected === item.name;
      
        if (isSelected) {
          setSelected("");
        } else {
          setSelected(item.name);
        }
    }
    
      
      

    const loadMore = async () => {
        setIsLoading(true)
        // Introduce a one-second delay using setTimeout
        await new Promise((resolve) => setTimeout(resolve, 300));
        // fetchMoreItems(itemsPerPage, pageNumber+1, fetch, search)
        //     .then(response => {
        //         setItems(prevItems => [...prevItems, ...response?.data]);
        //         setPageNumber(pageNumber + 1);
        //         setIsLoading(false);
        //         setIsCompleted(pageNumber+1 >= Math.ceil(response.total / itemsPerPage))
        //     })
        //     .catch(error => {
        //         console.error('Error fetching more items:', error);
        //         setIsLoading(false);
        //     });
    };

    useEffect(() => {
        setIsLoading(true);
        // if(fetchMoreItems){
        //     fetchMoreItems(itemsPerPage, pageNumber, fetch, search)
        //     .then(
        //         response => {console.log(response.data),
        //         setItems(response?.data),
        //         setIsLoading(false)
        //         setIsCompleted(pageNumber+1 >= Math.ceil(response.total / itemsPerPage))

        //     }
        // ).catch(error => {
        //         setIsLoading(false),
        //         console.error('Error fetching more items:', error)
        //         return []; // Return an empty array in case of error
        //     });
        // }
    }, [search]);

    return (
        <Accordion className='border bg-white px-7 border-[#A7A7A7] rounded-[20px]' transition={{ duration: '300ms', timingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }}>
            <AccordionItem isActive={true}>
                {({ open }) => (
                    <>
                        <AccordionHeader className="w-full flex justify-between items-center text-black py-4">
                            <span className="font-bold text-base">{header}</span>
                            {open ? (
                                <BiChevronUp className="text-slate-500 font-bold text-xl" />
                            ) : (
                                <BiChevronDown className="text-slate-500 font-bold text-xl" />
                            )}
                        </AccordionHeader>

                        <AccordionBody>
                            {isSearchable ? (
                                <div className="relative mb-4">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={e=> setSearch(e.target.value)}
                                        className="py-3 px-6 w-full font-medium text-sm rounded-[100px] z-0 focus:shadow focus:outline-none bg-[#F5F5F5]"
                                        placeholder={`Search ${header}`}
                                    />
                                    <div className="absolute top-1/2 right-1 -translate-y-1/2">
                                        <button className="mr-4 h-full">
                                            <BiSearch />
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                            {fetchMoreItems?
                            <ul className='mb-4 grid gap-4'>
                            {items.map((item:any) => {
                                if(isRadio){
                                    return (
                                        <li key={item.id} onClick={()=> handleRadio(item)}>
                                            <Radio item={item.name} checked={selected===item.name} /> 
                                        </li>
                                    );
                                }
                                    return (
                                        <li key={item.id} onClick={()=> handleCheck(item)}>
                                                <Check item={item.name} checked={selected?.split('|').includes(item.name)} />
                                        </li>
                                    );
                            })}
                            </ul>
                                :
                            <ul className='mb-4 grid gap-4'>
                                {list.map((item: any) => {
                                    if(isRadio){
                                        return (
                                            <li key={item.id} onClick={()=> handleRadio(item)}>
                                                <Radio item={item.name} checked={selected===item.name} /> 
                                            </li>
                                        );
                                    }
                                        return (
                                            <li key={item.id} onClick={()=> handleCheck(item)}>
                                                    <Check item={item.name} checked={selected?.split(',').includes(handleCommaForQuery(item.name))} />
                                            </li>
                                        );
                                })}
                            </ul>
                            }
                            {isLoading && fetchMoreItems &&  <div className="flex w-full justify-center mb-7">
                                <div className="w-5 h-5 border-slate-200 border-2 rounded-full border-r-blue animate-spin"></div>
                            </div>}
                            {!isCompleted && !isLoading && (
                                <button onClick={loadMore} type="button" className="mb-4 text-blue">
                                    Load More
                                </button>
                            )}
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    );
}
