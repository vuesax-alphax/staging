const e=JSON.parse(`{"key":"v-1da49f89","path":"/components/navbar.html","title":"Navbar","lang":"en-US","frontmatter":{"PROPS":[{"name":"fixed","type":"Boolean","values":"true, false","description":"Defines if the component is fixed on the screen.","default":false,"link":null,"usage":null,"code":"<vs-navbar fixed>\\n  ...\\n</vs-navbar>\\n"},{"name":"shadow","type":"Boolean","values":"true, false","description":"Add a shadow to the component.","default":"primary","link":null,"usage":null,"code":"<vs-navbar shadow>\\n  ...\\n</vs-navbar>\\n"},{"name":"shadow-scroll","type":"Boolean","values":"true, false","description":"Add functionality to add shadow to component when scrollTop is more than 0.","default":false,"link":null,"usage":null,"code":"<vs-navbar shadow-scroll>\\n  ...\\n</vs-navbar>\\n"},{"name":"hide-scroll","type":"Boolean","values":"true, false","description":"Add the functionality to hide and show the component based on whether the scroll is lowered or raised.","default":false,"link":null,"usage":"#hide-scroll","code":"<vs-navbar hide-scroll>\\n  ...\\n</vs-navbar>\\n"},{"name":"textWhite","type":"Boolean","values":"true, false","description":"Change the text color of items to white.","default":false,"link":null,"usage":"#color","code":"<vs-navbar text-white>\\n  ...\\n</vs-navbar>\\n"},{"name":"square","type":"Boolean","values":"true, false","description":"Change the border radius to 0 by making the component square.","default":false,"link":null,"usage":"#square","code":"<vs-navbar square>\\n  ...\\n</vs-navbar>\\n"},{"name":"padding-scroll","type":"Boolean","values":"true, false","description":"Determines if the component has padding and the user scrolling is removed making an effect.","default":false,"link":null,"usage":"#padding-scroll","code":"<vs-navbar padding-scroll>\\n  ...\\n</vs-navbar>\\n"},{"name":"not-line","type":"Boolean","values":"true, false","description":"Delete the active line in the component.","default":false,"link":null,"usage":"#not-line","code":"<vs-navbar not-line>\\n  ...\\n</vs-navbar>\\n"},{"name":"left-collapsed","type":"Boolean","values":"true, false","description":"Add the functionality that when the elements of this slot cannot be correctly they are visually removed.","default":false,"link":null,"usage":"#default","code":"<vs-navbar left-collapsed>\\n  ...\\n</vs-navbar>\\n"},{"name":"center-collapsed","type":"Boolean","values":"true, false","description":"Add the functionality that when the elements of this slot cannot be correctly they are visually removed.","default":false,"link":null,"usage":"#default","code":"<vs-navbar center-collapsed>\\n  ...\\n</vs-navbar>\\n"},{"name":"right-collapsed","type":"Boolean","values":"true, false","description":"Add the functionality that when the elements of this slot cannot be correctly they are visually removed.","default":false,"link":null,"usage":"#default","code":"<vs-navbar right-collapsed>\\n  ...\\n</vs-navbar>\\n"},{"name":"target-scroll","type":"Boolean","values":"true, false","description":"Determines the element to which the scroll event will be requested.","default":"document","link":null,"usage":"#target-scroll","code":"<vs-navbar target-scroll=\\"#my-element\\">\\n  ...\\n</vs-navbar>\\n"},{"name":"item:active","type":"Boolean","values":"true, false","description":"Determines if the component is in active status.","default":false,"link":null,"usage":"#default","code":"<vs-navbar-item active>\\n  ...\\n</vs-navbar-item>\\n"},{"name":"item:to","type":"String, Object","values":"vue-router RouteLocationRaw","description":"Use vue-router to generate a new view based on the supplied string.","default":false,"link":null,"usage":null,"code":"<vs-navbar-item to=\\"/\\">\\n  ...\\n</vs-navbar-item>\\n"},{"name":"item:to","type":"String, Object","values":"vue-router RouteLocationRaw","description":"Use vue-router to generate a new view based on the supplied string.","default":false,"link":null,"usage":null,"code":"<vs-navbar-item to=\\"/\\">\\n  ...\\n</vs-navbar-item>\\n"},{"name":"item:link","type":"Object","values":"NavLink","description":"Use to navigate the site","default":false,"link":null,"usage":null,"code":"<vs-navbar-item :link=\\"{ path: '/docs', text: 'Documents' }\\">\\n  ...\\n</vs-navbar-item>\\n"}],"SLOTS":[{"name":"default","type":"slot","values":null,"description":"Add the elements in the center of the component.","default":null,"link":null,"usage":"#default","code":"<vs-navbar v-model=\\"active\\">\\n  <vs-navbar-item :active=\\"active == 'guide'\\" id=\\"guide\\">\\n    Guide\\n  </vs-navbar-item>\\n</vs-navbar>\\n"},{"name":"left","type":"slot","values":null,"description":"Add the elements on the left side of the component.","default":null,"link":null,"usage":"#default","code":"<template #left>\\n  <img src=\\"/logo2.png\\" alt=\\"\\">\\n</template>\\n"},{"name":"right","type":"slot","values":null,"description":"Add the elements on the right side of the component.","default":null,"link":null,"usage":"#default","code":"<template #right>\\n  <vs-button flat> Login </vs-button>\\n  <vs-button> Get Started </vs-button>\\n</template>\\n"}]},"headers":[{"level":2,"title":"Default","slug":"default","link":"#default","children":[]},{"level":2,"title":"Color","slug":"color","link":"#color","children":[]},{"level":2,"title":"Hide scroll","slug":"hide-scroll","link":"#hide-scroll","children":[]},{"level":2,"title":"Group","slug":"group","link":"#group","children":[]},{"level":2,"title":"Padding Scroll","slug":"padding-scroll","link":"#padding-scroll","children":[]},{"level":2,"title":"Square","slug":"square","link":"#square","children":[]},{"level":2,"title":"Not line","slug":"not-line","link":"#not-line","children":[]},{"level":2,"title":"Types","slug":"types","link":"#types","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"git":{"createdTime":1717527509000,"updatedTime":1717527509000,"contributors":[{"name":"Haojie Ning","email":"54093230+badspider7@users.noreply.github.com","commits":1}]}}`);export{e as data};