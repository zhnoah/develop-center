import React, { Component } from 'react'
import localforage from 'localforage'
import IDBExportImport from 'indexeddb-export-import'

import './index.css'

class Stack extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        let items = {
            'node': {
                'a': 1, 
                'b': 2
            },
            'npm': {
                'a': 3,
                'b': 4
            }
        }

        // DB
        this.db = localforage.createInstance({
            name: 'stack db',
            driver: localforage.INDEXEDDB
        })

        // 批量写
        for(var key in items) {
            if(items.hasOwnProperty(key)) {
                this.db.setItem(key, items[key])
            }
        }

        // 读
        this.db.getItem('node').then(res => {
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