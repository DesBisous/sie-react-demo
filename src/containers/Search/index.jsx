import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from "../../components/SearchHeader/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as asyncAction from '../../redux/actions/async';
import Nav from "../../components/Nav/index";
import MyListView from "../../components/ListView/index";
import {ListView, PullToRefresh} from 'antd-mobile';

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            isLoading: true,
            pageIndex: 0,
            numRows: 6,
            pageSize: 6,
            hasMore: true,
            refreshing: false
        };
    }
    componentDidMount() {
        setTimeout(() => {
            if( this.props.async.local.length <= 0 ) {
                this.onEndReached();
            }else {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.props.async.local),
                    isLoading: false,
                });
            }
        }, 50);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.async.local !== this.props.async.local) {
            setTimeout(() => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(nextProps.async.local),
                    pageIndex: this.state.pageIndex + 1,
                    isLoading: false,
                    refreshing: false
                });
            }, 1000);
        }
    }
    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        this.getLocal();
    };
    getLocal = () => {
        this.props.asyncActions.localData();
    };
    back = () => {
        this.props.history.goBack();
    };
    refresh = () => {
        this.setState({ refreshing: true });
        this.props.asyncActions.localUpdateData();
    } ;
    goToCV(id) {
        this.props.history.push({pathname: '/CurriculumVitae', id: id})
    };
    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    height: 0,
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            return (
                <MyListView key={rowID} item={rowData} goToCV={this.props.goToCV}></MyListView>
            );
        };
        return (
            <div className="sie-container">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
                <div className="has-header">
                    <SearchHeader enterHandle={this.refresh}></SearchHeader>
                    <div>
                        <ListView
                            ref={el => this.lv = el}
                            dataSource={this.state.dataSource}
                            renderHeader={() => <span>Pull to refresh</span>}
                            renderFooter={() => (<div style={{ padding: 0, textAlign: 'center' }}>
                                {this.state.isLoading ? 'Loading...' : 'Loaded'}
                            </div>)}
                            renderRow={row}
                            renderSeparator={separator}
                            className="am-list"
                            pageSize={this.state.pageSize}
                            useBodyScroll
                            onScroll={() => {  }}
                            scrollRenderAheadDistance={500}
                            pullToRefresh={<PullToRefresh
                                refreshing={this.state.refreshing}
                                onRefresh={this.refresh}
                            />}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={10}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        async: state.async,
        loc: state.loc
    }
}
function mapDispatchToProps (dispatch) {
    return {
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);




