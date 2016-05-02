'use strict';
import React from 'react';
import { render } from 'react-dom';
import OAM from '../../../../assets/scripts/index';

var renderDrops = function () {
  var container = document.querySelector('[data-hook="react:drops"]');
  if (container === null) return;

  var el = React.createElement('div', null,
    <OAM.Dropdown
      triggerClassName='button button--achromic'
      triggerText='Toggle' >

      <h6 className='drop__title'>This is a title</h6>
      <ul className='drop__menu drop__menu--iconified' role='menu'>
        <li><a href='#' title='This is Item 1a' className='drop__menu-item'><i className='oam-ds-icon-pencil'></i>Edit</a></li>
        <li><a href='#' title='This is Item 2a' className='drop__menu-item drop__menu-item--example-icon'>Download</a></li>
      </ul>
      <ul className='drop__menu drop__menu--iconified' role='menu'>
        <li><a href='#' title='This is Item 1a' className='drop__menu-item delete'><i className='oam-ds-icon-trash-bin'></i>Delete</a></li>
      </ul>

    </OAM.Dropdown>,

    <OAM.Dropdown
      className='drop__content--special'
      triggerElement='a'
      triggerClassName='button button--achromic drop__toggle--caret'
      triggerTitle='Show/hide options'
      triggerText='Toggle'
      direction='up'
      aligment='left' >

      <ul className='drop__menu' role='menu'>
        <li><a href='#' title='This is Item 1a' className='drop__menu-item'>Item 1a</a></li>
        <li><a href='#' title='This is Item 2a' className='drop__menu-item'>Item 2a</a></li>
      </ul>
      <ul className='drop__menu' role='menu'>
        <li><a href='#' title='This is Item 1b' className='drop__menu-item'>Item 1b</a></li>
        <li><a href='#' title='This is Item 2b' className='drop__menu-item'>Item 2b</a></li>
      </ul>
      <div className='drop__inset'>
        <p>This is a drop inset.</p>
      </div>

    </OAM.Dropdown>
  );

  render(el, container);
};

module.exports = renderDrops;
