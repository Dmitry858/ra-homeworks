'use strict';

const MessageHistory = function({list}) {
  if (list.length === 0) return null;

  const msgGenerator = function(props) {
    const {type, id, from} = props;
    let MsgType;
    if (type === 'message') {
      MsgType = Message;
    }
    if (type === 'response') {
      MsgType = Response;
    }
    if (type === 'typing') {
      MsgType = Typing;
    }
    return <MsgType from={from} message={props} key={id} />;
  };
  
  return <ul>{list.map(item => msgGenerator(item))}</ul>;
}

MessageHistory.defaultProps = { list: [] };