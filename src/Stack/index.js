import React, { Component } from 'react'
import localforage from 'localforage'
import IDBExportImport from 'indexeddb-export-import'

import './index.css'

class Stack extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        // DB
        this.db = localforage.createInstance({
            name: 'test db',
            driver: localforage.INDEXEDDB
        })

        // 写
        this.db.setItem('key', 'Hello, IndexedDB')

        // 读
        this.db.getItem('key').then(res => {
            console.log(res)
        })
    }

    render() {

        return (
            <div className="stack-container center-block">


                <p className="stack-footer">
                    @历史版本：
                    <a href="./stacks_v0.1/index.html" target="_blank">v0.1</a>&nbsp;
                    <a href="./stacks_v0.2/stacks.pdf" target="_blank">v0.2</a>
                </p>
            </div>
        )
    }
}

export default Stack