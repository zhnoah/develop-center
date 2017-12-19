import React from 'react'
import {
    ListGroupItem,
} from 'react-bootstrap'

import './Item.css'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: './images/' + this.props.software.id + '.png'
        }
        this.onError = this.onError.bind(this)
    }

    onError() {
        this.setState({
            imgUrl: './images/default.png'
        })
    }

    render() {

        const { software } = this.props

        return (
            <ListGroupItem className="clearfix">
                <div className="pull-left panel-title-group">
                    <img width="18"
                        height="18"
                        src={this.state.imgUrl}
                        onError={this.onError}
                        alt={software.caption}
                    />
                    <span className="panel-title-caption">{software.caption}</span>
                    {
                        software.loginFlag &&
                        <small title="登录"
                            className="badge-icon glyphicon glyphicon-user"
                        />
                    }
                    {
                        software.configFlag &&
                        <small title="配置"
                            className="badge-icon glyphicon glyphicon-cog" />
                    }
                    {
                        software.licenseFlag &&
                        <small title="密钥" className="badge-icon glyphicon glyphicon-credit-card" />
                    }
                </div>
                <div className="pull-right toolbar">
                    {software.optionUrl && (
                        <a href={software.downloadUrl}
                            title="下载">
                            <i className="glyphicon glyphicon-option-horizontal" />
                        </a>
                    )}
                    {(software.downloadUrl === 'cloud-disk') ?
                        <span title="云盘" className="glyphicon glyphicon-hdd" /> :
                        software.downloadFlag ?
                            (
                                <a href={software.downloadUrl}
                                    title="下载"
                                ><span className="glyphicon glyphicon-save" /></a>
                            ) :
                            software.storeFlag ?
                                <span title="App Store" className="glyphicon glyphicon-home" /> :
                                (
                                    <a href={software.downloadUrl}
                                        title="跳转到下载链接"
                                        target="_blank"
                                    ><span className="glyphicon glyphicon-link" /></a>
                                )
                    }
                </div>
            </ListGroupItem>
        )
    }
}

export default Item