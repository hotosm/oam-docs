'use strict';
import React from 'react';
import { render } from 'react-dom';
import OAM from 'oam-design-system';
var { Modal, ModalHeader, ModalBody, ModalFooter } = OAM.Modal;

var ModalShowcase = React.createClass({
  displayName: 'ModalShowcase',

  getInitialState: function () {
    return {
      open: false
    };
  },

  openModal: function () {
    this.setState({open: true});
  },

  closeModal: function () {
    this.setState({open: false});
  },

  // Modal Trigger:
  // The modal needs to be placed at the end of the document otherwise
  // the relative position of its containers would prevent it from
  // rendering correctly.
  // However the trigger needs to be placed with the example code inside one of
  // the aforementioned containers.
  // When the component mounts a click event is added to the button to link both.
  _outsideElementClickListener: function (e) {
    this.openModal();
  },

  componentDidMount: function () {
    document
      .querySelector('[data-hook="react:modal-trigger"]')
      .addEventListener('click', this._outsideElementClickListener);
  },

  componentWillUnmount: function () {
    document
      .querySelector('[data-hook="react:modal-trigger"]')
      .removeEventListener('click', this._outsideElementClickListener);
  },

  render: function () {
    return (
      <Modal
        id='modal-showcase'
        className='modal--dark modal--large'
        onCloseClick={this.closeModal}
        revealed={this.state.open} >

        <ModalHeader>
          <div className='modal__headline'>
            <p className='modal__subtitle'>Excerpt</p>
            <h1 className='modal__title'>The Last Question</h1>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className='prose'>
            <p>All other questions had been answered, and until this last question was answered also, AC might not release his consciousness.</p>
            <p>All collected data had come to a final end. Nothing was left to be collected. But all collected data had yet to be completely correlated and put together in all possible relationships.</p>
            <p>A timeless interval was spent in doing that.</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <cite><a href='http://multivax.com/last_question.html' title='Open The Last Question'>The Last Question</a>, Isaac Asimov 1956</cite>
        </ModalFooter>
      </Modal>
    );
  }
});

var renderModals = function () {
  var container = document.querySelector('[data-hook="react:modal"]');
  if (container === null) return;
  render(React.createElement('div', null, <ModalShowcase />), container);
};

module.exports = renderModals;
