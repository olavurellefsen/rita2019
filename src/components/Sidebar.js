import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Heim', href: 'intro' },
        { content: 'Hvat', href: 'hvat' },
        { content: 'Um #rita1tíma', href: 'um' },
        { content: 'Skráset', href: 'skraset' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <a href={`/#${href}`}>{content}</a>
                  </li>
                );
              })}
            </Scrollspy>
          </nav>
        </div>
      </section>
    );
  }
}

export default Sidebar;
