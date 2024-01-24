'use client'
import styles from './Separator.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Separator({id}) {

  return (
    <div id={id} className={styles.separator}>

    </div>
  )
}
