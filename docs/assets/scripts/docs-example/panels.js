'use strict';
import React from 'react';
import { render } from 'react-dom';
import ScrollArea from 'react-scrollbar/dist/no-css';

var renderPanels = function () {
  var container = document.querySelector('[data-hook="react:panels"]');
  if (container === null) return;

  var el = React.createElement('div', null,
    <section className='panel'>
      <header className='panel__header'>
        <div className='panel__headline'>
        <h1 className='panel__title'>Panel title lorem ipsum dolor sit amet</h1>
          <div className='panel__subtitle'>Panel subtitle</div>
        </div>
        <div className='panel__meta-actions'>
          <button className='panel__button-dismiss' title='Dismiss panel'><span>Dismiss</span></button>
        </div>
      </header>

        <ScrollArea
          style={{height: '10rem'}}
          speed={1.6}
          className='panel__body'
          contentClassName='panel__body-inner'
          smoothScrolling={true}
          horizontal={false} >

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam officiis aliquid harum similique fugit molestiae sequi, corrupti. Quo accusantium, soluta corporis molestiae, eos suscipit expedita aspernatur rerum ad ea!</p>
        </ScrollArea>

      <footer className='panel__footer'></footer>
    </section>
  );

  render(el, container);
};

module.exports = renderPanels;
