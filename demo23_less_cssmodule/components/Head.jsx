import React from 'react'
import styles from './head.less'

const Head = ()=>{
    console.log(styles.head)
    return (
        <div className={styles.head}>This is head</div>
    )
}
export default Head