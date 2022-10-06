import {Component} from 'react'

import AppItem from '../AppItem'
import TabItem from '../TabItem'

import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Static'},
  {tabId: 'GAMES', displayText: 'Responsive'},
  {tabId: 'NEWS', displayText: 'Dynamic'},
  {tabId: 'FOOD', displayText: 'React js'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Tourism Website',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/tourism-website-img.png',
    category: 'SOCIAL',
    projectUrl: 'https://tourismwebsitev.ccbp.tech/',
  },
  {
    appId: 1,
    appName: 'Happy Meals',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/happy-meal-img.png',
    category: 'SOCIAL',
    projectUrl: 'https://vshappymeals.ccbp.tech/',
  },
  {
    appId: 2,
    appName: 'Book Store',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/book-store-img.png',
    category: 'SOCIAL',
    projectUrl: 'https://bookhousebest.ccbp.tech/',
  },
  {
    appId: 3,
    appName: 'Advanced Technologies',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/advanced-technologies-img.png',
    category: 'SOCIAL',
    projectUrl: 'https://vsagaradvtech.ccbp.tech/',
  },
  {
    appId: 4,
    appName: 'Chat Page',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/chat-screen-img.png',
    category: 'SOCIAL',
    projectUrl: 'https://vschatpage.ccbp.tech/',
  },
  {
    appId: 5,
    appName: 'Mobile Store',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/mobile-store-img.png',
    category: 'SOCIAL',
    projectUrl: 'https://vsmobilestore.ccbp.tech/',
  },
  {
    appId: 6,
    appName: 'Music Page',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/music-page-img.png',
    category: 'SOCIAL',
    projectUrl: 'https://vsrsleepmusic.ccbp.tech/',
  },
  {
    appId: 7,
    appName: 'Podcasts',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/podcasts-bg.png',
    category: 'SOCIAL',
    projectUrl: 'https://vsagarpodcasts.ccbp.tech/',
  },

  {
    appId: 10,
    appName: 'Food Munch',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/food-munch-img.png',
    category: 'GAMES',
    projectUrl: 'https://fm.ccbp.tech/',
  },
  {
    appId: 11,
    appName: 'Portfolio',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/portfolio-img.png',
    category: 'GAMES',
    projectUrl: 'https://vsgrportfolio.ccbp.tech/',
  },
  {
    appId: 110,
    appName: 'Grand Hotel',
    imageUrl:
      'https://www.gannett-cdn.com/presto/2022/03/03/USAT/14abe1e8-0336-44e3-b2cd-e8843bf46e08-GettyImages-1319453433.jpg',
    category: 'GAMES',
    projectUrl: 'https://bookingplace.ccbp.tech/',
  },
  {
    appId: 12,
    appName: 'Testmonials',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmoF9VO-ZJwuH4YbP0S1FHBzvOMgNxRMc1Q&usqp=CAU',
    category: 'GAMES',
    projectUrl: 'https://vsgtestimonials.ccbp.tech/',
  },
  {
    appId: 13,
    appName: 'Color Palette',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/color-palette-img.png',
    category: 'GAMES',
    projectUrl: 'https://vsrcolorpalette.ccbp.tech/',
  },
  {
    appId: 14,
    appName: 'Product Launch Section',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-products-headphones-bg.png',
    category: 'GAMES',
    projectUrl: 'https://vsproductlaunch.ccbp.tech/',
  },
  {
    appId: 15,
    appName: 'Website Offers Section',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-appliances-img.png',
    category: 'GAMES',
    projectUrl: 'https://vsgoffersection.ccbp.tech/',
  },
  {
    appId: 17,
    appName: 'VR Website Optics and Controllers',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-optics-img.png',
    category: 'GAMES',
    projectUrl: 'https://vsgrwebsite.ccbp.tech/',
  },

  {
    appId: 20,
    appName: 'Todos',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yl6FZMZiRbUVboRbdVb_wXhNHAApIEqP0w&usqp=CAU',
    category: 'NEWS',
    projectUrl: 'https://vsagartodos.ccbp.tech/',
  },
  {
    appId: 21,
    appName: 'Speed type test',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/speed-type-test-img.png',
    category: 'NEWS',
    projectUrl: 'https://vsgsppedtyping.ccbp.tech/',
  },
  {
    appId: 22,
    appName: 'Sizing An Image',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/sizing-an-image-img.png',
    category: 'NEWS',
    projectUrl: 'https://vsgrsizingimg.ccbp.tech/',
  },
  {
    appId: 23,
    appName: 'Seasons Switcher',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/seasons-switcher-img.png',
    category: 'NEWS',
    projectUrl: 'https://vseasonswitcher.ccbp.tech/',
  },
  {
    appId: 24,
    appName: 'Chat Bot',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/chat-bot-img.png',
    category: 'NEWS',
    projectUrl: 'https://vsgrchatbot.ccbp.tech/',
  },

  {
    appId: 25,
    appName: 'Bookmark Maker',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/bookmark-img.png',
    category: 'NEWS',
    projectUrl: 'https://vsgbookmark.ccbp.tech/',
  },
  {
    appId: 26,
    appName: 'Book Search',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/book-search-img.png',
    category: 'NEWS',
    projectUrl: 'https://vsglibrarymang.ccbp.tech/',
  },

  {
    appId: 31,
    appName: 'Counter',
    imageUrl:
      'data:image/jpeg;base64,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',
    category: 'FOOD',
    projectUrl: 'https://vsagarcounter.ccbp.tech/',
  },
  {
    appId: 32,
    appName: 'Blogs List',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/blogs-list-img.png',
    category: 'FOOD',
    projectUrl: 'https://vsagarbloglist.ccbp.tech/',
  },
  {
    appId: 33,
    appName: 'Shopping Cart',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfQzCvKxLcyr54pM9kwnfIJNxgpVdChXV-w&usqp=CAU',
    category: 'FOOD',
    projectUrl: 'https://nxtz.ccbp.tech/',
  },
  {
    appId: 34,
    appName: 'Appointment App',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/appointment-app-img.png',
    category: 'FOOD',
    projectUrl: 'https://vsagarappoint.ccbp.tech/',
  },
  {
    appId: 35,
    appName: 'Tech Era',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-riENiERnNbW6Jd9QK5kl5hoR4lAwnJREwQfIY8EB8tOr5E8WZwnro3rDI9yDnnS4lE&usqp=CAU',
    category: 'FOOD',
    projectUrl: 'https://vsagartechera.ccbp.tech/',
  },

  {
    appId: 38,
    appName: 'Properties',
    imageUrl:
      'https://e7.pngegg.com/pngimages/178/466/png-clipart-real-estate-property-estate-agent-logo-house-house-angle-building-thumbnail.png',
    category: 'FOOD',
    projectUrl: 'https://vsagarhouserent.ccbp.tech/',
  },
  {
    appId: 39,
    appName: 'IPL Dashboard',
    imageUrl:
      'https://miro.medium.com/max/1400/1*UvMYRlcNFnks50d5D8i7uQ@2x.png',
    category: 'FOOD',
    projectUrl: 'https://vsagariplboard.ccbp.tech/',
  },
]

class AppStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {activeTabId} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="app-container">
        <div className="app-store">
          
          <h1 className="heading">My Projects</h1>
          <p className="para">
            Refer to the below images. The following images illustrate all
            device sizes, from extra small to extra large. Extra small (Size
            576px) and Small (Size 576px):Start to Responsive
          </p>

          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="apps-list">
            {filteredApps.map(eachApp => (
              <AppItem key={eachApp.appId} appDetails={eachApp} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AppStore
