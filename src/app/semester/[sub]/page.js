"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import SelectedSemester1 from '../components/SelectedSemester';
import SelectedSemester2 from '../components/SelectSemester2';
import SelectedSemester3 from '../components/SelectedSemester3';
import SelectedSemester4 from '../components/SelectedSemester4';
import SelectedSemester5 from '../components/SelectedSemester5';
import SelectedSemester6 from '../components/SelectedSemester6';
import SelectedSemester7 from '../components/SelectedSemester7';
import SelectedSemester8 from '../components/SelectedSemester8';

function page() {
    const {sub} = useParams();

    const realSubject=decodeURIComponent(sub);
    if(realSubject.toLocaleLowerCase()=="first semester"){
        
        return (
            <SelectedSemester1 />
        )
    }else if (realSubject.toLocaleLowerCase()=="second semester"){
        return (
            <SelectedSemester2 />
        )
    }else if (realSubject.toLocaleLowerCase()=="third semester"){
        return (
            <SelectedSemester3 />
        )
    } else if(realSubject.toLocaleLowerCase()=="fourth semester"){
        return (
            <SelectedSemester4 />
        )
    } else if (realSubject.toLocaleLowerCase()=="fifth semester"){
        return (
            <SelectedSemester5 />
        )
    }else if (realSubject.toLocaleLowerCase()=="sixth semester"){
        return (
            <SelectedSemester6 />
        )
    }else if(realSubject.toLocaleLowerCase()=="seventh semester"){
        return (
            <SelectedSemester7 />
        )
    }else if (realSubject.toLocaleLowerCase()=="eighth semester"){
        return (
            <SelectedSemester8 />
        )
    }
  return (
    <div>
        
    </div>
  )
}

export default page