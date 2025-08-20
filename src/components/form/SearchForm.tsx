import React from 'react'
type SearchFormProps = {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
  };
function SearchForm({userName,setUserName}:SearchFormProps) {
  return (
    <div>
      SearchForm
    </div>
  )
}

export default SearchForm
