import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'sonner';
type SearchFormProps = {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
  };
function SearchForm({userName,setUserName}:SearchFormProps) {
  const [text,setText] = useState(userName);

  const handleSearch = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!text){
      toast.error("Search it empty!!")
      return;
    }
    setUserName(text);
  }
  return (
    <form
    onSubmit={handleSearch}
    className='flex items-center gap-x-2 w-full lg:w-1/3 mb-8'
  >
    <Label htmlFor='search' className='sr-only'>
      Search
    </Label>
    <Input
      type='text'
      id='search'
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Search Github User...'
      className=' flex-grow bg-accent '
    />
    <Button type='submit'>Search</Button>
  </form>
  )
}

export default SearchForm
