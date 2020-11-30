import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'แบบฟอร์มตรวจรับ-ส่งอากาศยาน',
    path: '/Froms',
    icon: <AiIcons.AiOutlineForm />,
    cName: 'nav-text'
  },
  {
    title: 'รายงานผลการตรวจรับ-ส่ง บ ประจำวัน',
    path: '/Reports',
    icon: <HiIcons.HiOutlineDocumentReport />,
    cName: 'nav-text'
  },
  {
    title: 'สถานะเครื่อง บ.ฝ.16ก',
    path: '/Status16',
    icon: <IoIcons.IoIosAirplane />,
    cName: 'nav-text'
  },
  {
    title: 'สถานะเครื่อง บ.ฝ.19',
    path: '/Status19',
    icon: <IoIcons.IoIosAirplane />,
    cName: 'nav-text'
  },
  {
    title: 'สถานะเครื่อง บ.ฝ.20ก',
    path: '/Status20',
    icon: <IoIcons.IoIosAirplane />,
    cName: 'nav-text'
  }

];
