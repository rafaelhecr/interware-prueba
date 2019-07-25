import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { chats: state.chats };
}

const ConnectedList = ({ chats }) => (
    <div class="chat-history">
            <ul>
                {chats.map(el => (
                    <li class="clearfix">
                        <div class="message-data align-right">
                            <span class="message-data-time" >9:50 AM, Hoy</span> &nbsp; &nbsp;
                            <span class="message-data-name" >Me</span> 
                        </div>

                        <div class="message other-message float-right">
                            {el.textchat}
                        </div>

                    </li>
                ))}

            </ul>
            
          </div>
);

const List = connect(mapStateToProps) (ConnectedList);

export default List;