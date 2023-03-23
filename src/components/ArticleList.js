import React from "react";
import { useState } from "react";
import index from "../index.css";
import Button from "./Button.js";
import CreateArticle from "./CreateArticle";

const ArticleList = ({
  list,
  setToDoList,
  bookList,
  totalUnits,
  currentView,
  setcurrentView,
}) => {
  const onDelete = (name) => {
    const newArray = list.filter((item) => {
      if (item.name === name) {
        return false;
      }
      return true;
    });
    setToDoList(newArray);
  };

  const currentStock = () => {
    bookList.map((element) => {
      return element.totalunits;
    });
  };

  const setCurrentView = () => {
    //set a new currentView which shows the CreateArticleForm in App.js
    setcurrentView("CreateArticle");
  };

  return (
    <div class='flex flex-col items-end px-10 py-10 w-full'>
      {currentView === "ArticleList" ? (
        <Button //this button adds a new element/product in the table
          name='+ ADD'
          onClick={setCurrentView}
          className='px-2 py-1 animate-bounce'
        />
      ) : null}
      <div class='w-full overflow-hidden rounded-lg border border-gray-200 shadow-md '>
        <table class='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          {" "}
          {/* beginn of table*/}
          <thead class='bg-gray-50'>
            <tr>
              <th scope='col' class='px-6 py-4 font-medium text-gray-900'>
                Articlename
              </th>
              <th scope='col' class='px-6 py-4 font-medium text-gray-900'>
                Article Category
              </th>
              <th scope='col' class='px-6 py-4 font-medium text-gray-900'>
                Storage Place
              </th>
              <th scope='col' class='px-6 py-4 font-medium text-gray-900'>
                Suppliers
              </th>
              <th scope='col' class='px-6 py-4 font-medium text-gray-900'>
                Suppliers E-Mail Adress
              </th>
              <th
                scope='col'
                class='flex flex-row justify-center px-6 py-4 font-medium text-gray-900'
              >
                Edit
              </th>
            </tr>
          </thead>
          <tbody class='divide-y divide-gray-100 border-t border-gray-100'>
            {list.map((element) => {
              return (
                <tr class='hover:bg-gray-50'>
                  <td class='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                    <div class='font-medium text-gray-700'>{element.name}</div>
                  </td>
                  <td class='px-6 py-4'>
                    <span class='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                      <span class='h-1.5 w-1.5 rounded-full bg-green-600'></span>
                      {element.categorie}
                    </span>
                  </td>
                  <td class='px-6 py-4'>{element.storageLocation}</td>
                  <td class='px-6 py-4'>
                    <div class='flex gap-2'>
                      <span class='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
                        {element.supplier}
                      </span>
                    </div>
                  </td>
                  <td class='px-6 py-4'>
                    <div class='flex gap-2'>
                      <span class='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
                        {element.supplierEmail}
                      </span>
                    </div>
                  </td>
                  <td class='px-6 py-4'>
                    <div class='flex justify-end gap-4'>
                      <a x-data="{ tooltip: 'Delete' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleList;
