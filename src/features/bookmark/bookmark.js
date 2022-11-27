
import {db,query,where,collection, getDocs,auth} from "../../firebase"  

export const bookmark = 
   async () => {
        const user = auth.currentUser;
         const userId = user.uid;
         const q = query(collection(db, "bookedMarkedJobs"), where("uidRef", "==", userId));
         const querySnapshot = await getDocs(q);
         return querySnapshot.docs.map((job) => {
          return  {docRef: job.id ,id: job.id, ...job.data()}
         } );
        }  
         

        