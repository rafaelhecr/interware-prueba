import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import {addChat} from '../js/actions/index';
import List from './List';

function mapDispatchToProps (dispatch){
  return{
    addChat: chat => dispatch(addChat(chat))
  };
}

class ConnectedChat extends Component {
    constructor(){
      super();
      this.state = {
        textchat: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.enterPressed = this.enterPressed.bind(this)
    }

    handleChange(event){
      this.setState({ [event.target.id]: event.target.value })
    }

    enterPressed(event) {
      var code = event.KeyCode || event.which;
      if (code === 13){
        event.preventDefault();
        const { textchat } = this.state;
        const id = uuidv1();
        this.props.addChat({ textchat, id });
        this.setState({ textchat: ''});
      }
    }

    render(){
      const { textchat } = this.state;
      return(
        <div class="chat">
            <div class="chat-header clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" class ="img-session" alt="avatar" />
                <div className="chat-about">
                    <div className="chat-with">User 1</div>
                    <div className="style"></div>
                    <div class="chat-status-user">
                        <div className="status-icon">
                            <i class='fas fa-star'></i></div>                    
                        </div>
                    <div class="chat-status-user">Online</div>
                    <div class="chat-status-user">Trabajando remoto</div>
                </div>
                <div class="search-box">
                    <input type="text" placeholder="Busca un mensaje" />
                    <i class="fa fa-search"></i>
                </div>
            </div>

            <List /> 
          
          <div class="chat-message clearfix">
            <textarea 
              id="textchat" 
              placeholder ="Escribe tu mensaje" 
              rows="3"
              value={textchat}
              onChange = {this.handleChange}
              onKeyPress={this.enterPressed}
            />
            <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i class="fa fa-file-image-o"></i>
            
            

    
          </div>
        </div>
      )
    }
}

const Chat = connect(null, mapDispatchToProps) (ConnectedChat)

export default Chat;