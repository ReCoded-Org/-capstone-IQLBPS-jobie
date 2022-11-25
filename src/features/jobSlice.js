import {  createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';


const array=[]

export const getJobsList = createAsyncThunk(
  'jobs/getJobsList', async () => {
     const querySnapshot = await getDocs(collection(db, "jobs"));
     querySnapshot.forEach((doc) => {
      //  console.log(doc.id, " => ", doc.data());
       array.push(doc.data())
    });
   
    return (array)
  }
)

