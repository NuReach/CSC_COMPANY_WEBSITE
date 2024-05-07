import { Edit, Trash, Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import { Input } from '../ui/input';
import MyPagination from '../Pagination/MyPagination';
  

export default function PostTable({users}) {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelectionChange = (event) => {
      setSelectedValue(event.target.value);
      console.log("Selected value:", event.target.value);
    };
    
  return (
    <>
    <div className='flex justify-between mt-6 flex-wrap gap-3'>
        <div>
            <Input className="w-full sm:w-96" onChange={(e)=>console.log(e.target.value)} type="text"  placeholder="Search..." />
        </div>
        <Select onValueChange={(value)=>console.log(value)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="newest" >Newest</SelectItem>
                <SelectItem value="oldest" >Oldest</SelectItem>
            </SelectContent>
        </Select>
    </div>
    <div className='p-6 border rounded-lg mt-6'>
        <div className='flex font-bold text-lg cursor-pointer justify-between gap-3 border-b pb-3'>
            <div className='w-9 text-nowrap overflow-hidden text-ellipsis'>ID</div>
            <div className='w-36 text-nowrap overflow-hidden text-ellipsis'>Title</div>
            <div className='w-36 md:w-48 text-nowrap overflow-hidden text-ellipsis hidden lg:block'>Program</div>
            <div className='w-36 text-nowrap overflow-hidden text-ellipsis'>Country</div>
            <div className='w-20 text-nowrap overflow-hidden text-ellipsis hidden lg:block'>Deadline</div>
            <div className='flex justify-center w-20'>Action</div>
        </div>
        <div className='mt-3 gap-9 capitalize flex flex-col'>
            {
                users?.map((item,i)=>(
                    <div key={i} className='flex text-sm justify-between gap-3 items-center'>
                        <div className='w-9 text-nowrap overflow-hidden text-ellipsis'>{item.id}</div>
                        <div className='w-36 '>{item.name}</div>
                        <div className='w-36 md:w-48 text-nowrap overflow-hidden text-ellipsis hidden lg:block'>{item.email}</div>
                        <div className='w-36 text-nowrap overflow-hidden text-ellipsis'>{item.role}</div>
                        <div className='w-20 text-nowrap overflow-hidden text-ellipsis hidden lg:block'>{item.status}</div>
                        <div className='flex justify-center w-20 gap-1'>
                            <Link to={`/dashboard/post/edit/${item.id}`}><Edit /></Link>
                            <AlertDialog>
                                <AlertDialogTrigger><Trash /></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={()=>alert(item.id)} className="bg-red-600 hover:bg-red-500">Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                                </AlertDialog>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    <div className='w-full flex justify-end mt-3'>
        <MyPagination endPoint = {"/page=1"} data = {users} />
    </div>
    </>
  )
}
