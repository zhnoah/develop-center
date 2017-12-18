import React, { Component } from 'react'
import {
    PanelGroup,
} from 'react-bootstrap'
import localforage from 'localforage'
// import IDBExportImport from 'indexeddb-export-import'

import Pin from './react.pin'
import './index.css'
import { stacks, categories } from './stacks'
import Group from './Group'

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
        for (var key in items) {
            if (items.hasOwnProperty(key)) {
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
                <form className="serah-form">
                    <input type="text" className="form-control" placeholder="Search" />
                </form>
                <ul className="list-inline">
                    {
                        categories.map((category) => {
                            return (
                                <li key={category}>{category}</li>
                            )
                        })
                    }
                </ul>
                <PanelGroup className="stack-list">
                    {
                        stacks.map((stack) => {
                            return (
                                <Group key={stack.name} stack={stack} />
                            )
                        })
                    }
                </PanelGroup>
                <nav aria-label="...">
                    <ul className="pager">
                        <li><a href="#">More</a></li>
                    </ul>
                </nav>
                <p className="stack-footer">
                    @历史版本：
                    <a href="./stacks_v0.1/index.html" target="_blank">v0.1</a>&nbsp;
                    <a href="./stacks_v0.2/stacks.pdf" target="_blank">v0.2</a>
                </p>
                {/* <div className="col-md-4">
                        <button type="button" className="btn btn-primary btn-block">新增</button>
                        <Pin />
                    </div> */}
            </div>
        )
    }
}

export default Stack