import { useState } from "react";
import Button from "./Button";
import ArticleList from "./ArticleList.js";
import { v4 as uuidv4 } from "uuid";

const CreateArticle = ({
  list,
  setList,
  articleStatus,
  setArticleStatus,
  bookList,
  totalUnits,
  setcurrentView,
}) => {
  const [inputTextArticleName, setInputTextArticleName] = useState("");
  const [inputTextArticleCategorie, setInputTextArticleCategorie] =
    useState("");
  const [inputTextStorageLocation, setInputTextStorageLocation] = useState("");
  const [inputTextSupplier, setInputTextSupplier] = useState("");
  const [inputTextSupplierEmail, setInputTextSupplierEmail] = useState("");

  const addItem = () => {
    if (
      inputTextArticleName &&
      inputTextArticleName.length > 0 &&
      inputTextArticleCategorie &&
      inputTextArticleCategorie.length > 0 &&
      inputTextStorageLocation &&
      inputTextStorageLocation.length > 0 &&
      inputTextSupplier &&
      inputTextSupplier.length > 0 &&
      inputTextSupplierEmail &&
      inputTextSupplierEmail.length > 0
    ) {
      const newArray = [...list];
      newArray.push({
        articleid: uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        name: inputTextArticleName,
        categorie: inputTextArticleCategorie,
        storageLocation: inputTextStorageLocation,
        supplier: inputTextSupplier,
        supplierEmail: inputTextSupplierEmail,
      });
      setList(newArray);
      setInputTextArticleName("");
      setInputTextArticleCategorie("");
      setInputTextStorageLocation("");
      setInputTextSupplier("");
      setInputTextSupplierEmail("");
      setArticleStatus(true);
      setTimeout(() => setArticleStatus(false), 2000);
      clearTimeout();
    } else {
      alert("Unvollständige Eingabe");
    }
  };

  const deleteItem = () => {
    const listArray = [...list];
    listArray.pop();
    setList(listArray);
  };

  return (
    <body>
      <div class='flex flex-row-reverse gap-5 px-5'>
        <div class='flex flex-col gap-6 px-10 py-10'>
          <h1 class='font-bold fon text-gray-900'>Article Information</h1>
          <form>
            <div class='flex flex-col gap-8'>
              <input
                type='text'
                name='ArticleName'
                id='ArticleName'
                value={inputTextArticleName}
                onChange={(e) => setInputTextArticleName(e.target.value)}
                required
                class='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700'
                placeholder='Enter Article Name'
              />
              <input
                type='text'
                name='ArticleCategory'
                id='ArticleCategory'
                value={inputTextArticleCategorie}
                onChange={(e) => setInputTextArticleCategorie(e.target.value)}
                required
                class='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700'
                placeholder='Article Category'
              />
              <input
                type='text'
                name='StoragePlace'
                id='StoragePlace'
                value={inputTextStorageLocation}
                onChange={(e) => setInputTextStorageLocation(e.target.value)}
                required
                class='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700'
                placeholder='Storage Place'
              />
              <input
                type='text'
                name='Supplier'
                id='Supplier'
                value={inputTextSupplier}
                onChange={(e) => setInputTextSupplier(e.target.value)}
                required
                class='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700'
                placeholder='Supplier'
              />
              <input
                type='email'
                name='SuppliersEmailAdress'
                id='SuppliersEmailAdress'
                value={inputTextSupplierEmail}
                onChange={(e) => setInputTextSupplierEmail(e.target.value)}
                required
                class='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700'
                placeholder='yourmail@supplier.com'
              />
            </div>
          </form>
          <div class='flex flex-row gap-4 justify-between'>
            <Button
              name='Save'
              onClick={addItem}
              className='py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50'
            ></Button>
            <Button
              className='py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50'
              name='Cancel'
            ></Button>
          </div>
        </div>
        <ArticleList
          list={list}
          setToDoList={setList}
          bookList={bookList}
          totalUnits={totalUnits}
          setcurrentView={setcurrentView}
        />
        {console.log(inputTextArticleName)}
      </div>
    </body>
  );
};

export default CreateArticle;
