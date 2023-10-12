const editor = grapesjs.init({
  container: '#gjs',
  fromElement: true,
  storageManager: false,
  mediaCondition: 'min-width',
  deviceManager: {
    devices: [
      {
        name: 'Mobile',
        width: '360',
        widthMedia: '360',
      },
      {
        name: 'Tablet',
        width: '768',
        widthMedia: '768',
      },
      {
        name: 'Desktop',
        width: '992',
        widthMedia: '992',
      },
    ],
  },
  panels: {
    defaults: [
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [
          {
            id: 'device-desktop',
            label:
              '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.666 1.66699H12.3327C7.96038 1.66699 5.77422 1.66699 4.22456 2.75208C3.65122 3.15353 3.15255 3.6522 2.7511 4.22553C1.66602 5.7752 1.66602 7.96135 1.66602 12.3337C1.66602 16.706 1.66602 18.8921 2.7511 20.4418C3.15255 21.0151 3.65122 21.5138 4.22456 21.9152C5.77422 23.0003 7.96038 23.0003 12.3327 23.0003H17.666C22.0383 23.0003 24.2245 23.0003 25.7741 21.9152C26.3475 21.5138 26.8461 21.0151 27.2476 20.4418C28.3327 18.8921 28.3327 16.706 28.3327 12.3337C28.3327 7.96135 28.3327 5.7752 27.2476 4.22553C26.8461 3.6522 26.3475 3.15353 25.7741 2.75208C24.2245 1.66699 22.0383 1.66699 17.666 1.66699Z" stroke="#F5821F" stroke-width="1.5" stroke-linecap="round" /><path d="M13.666 19H16.3327" stroke="#F5821F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M18.3327 28.3333L17.912 27.7749C16.9637 26.5159 16.7286 24.5925 17.3284 23M11.666 28.3333L12.0867 27.7749C13.035 26.5159 13.2701 24.5925 12.6703 23" stroke="#F5821F" stroke-width="1.5" stroke-linecap="round"/><path d="M8.33203 28.334H21.6654" stroke="#F5821F" stroke-width="1.5" stroke-linecap="round"/></svg>',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          },
          {
            id: 'device-tablet',
            label:
              '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56445 11.6177C5.56445 6.79707 5.56445 4.38675 7.09259 2.88918C8.62073 1.3916 11.0802 1.3916 15.9992 1.3916C20.9182 1.3916 23.3777 1.3916 24.9059 2.88918C26.434 4.38675 26.434 6.79706 26.434 11.6177V20.3829C26.434 25.2035 26.434 27.6138 24.9059 29.1114C23.3777 30.609 20.9182 30.609 15.9992 30.609C11.0802 30.609 8.62073 30.609 7.09259 29.1114C5.56445 27.6138 5.56445 25.2035 5.56445 20.3829V11.6177Z" stroke="#0B2330" stroke-width="1.04348" stroke-linecap="round"/><path d="M15.3047 28.1738H16.696" stroke="#0B2330" stroke-width="0.695652" stroke-linecap="round"/></svg>',
            command: 'set-device-tablet',
            active: true,
            togglable: false,
          },
          {
            id: 'device-mobile',
            label:
              '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.04297 13.0183C9.04297 9.73883 9.04297 8.09911 10.0618 7.08032C11.0806 6.06152 12.7203 6.06152 15.9997 6.06152C19.2792 6.06152 20.9189 6.06152 21.9377 7.08032C22.9565 8.09911 22.9565 9.73883 22.9565 13.0183V18.9812C22.9565 22.2606 22.9565 23.9004 21.9377 24.9192C20.9189 25.9379 19.2792 25.9379 15.9997 25.9379C12.7203 25.9379 11.0806 25.9379 10.0618 24.9192C9.04297 23.9004 9.04297 22.2606 9.04297 18.9812V13.0183Z" stroke="#0B2330" stroke-width="1.04348" stroke-linecap="round"/><path d="M15.0059 22.957H16.9935" stroke="#0B2330" stroke-width="1.04348" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.0176 6.06152L13.106 6.59224C13.2977 7.74237 13.3936 8.31743 13.788 8.66736C14.1994 9.03239 14.7827 9.04299 15.999 9.04299C17.2153 9.04299 17.7987 9.03239 18.2101 8.66736C18.6045 8.31743 18.7004 7.74236 18.8921 6.59224L18.9805 6.06152" stroke="#0B2330" stroke-width="1.04348" stroke-linejoin="round"/></svg>',
            command: 'set-device-mobile',
            active: true,
            togglable: false,
          },
        ],
      },
    ],
  },
})

editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
})
editor.Commands.add('set-device-tablet', {
  run: (editor) => editor.setDevice('Tablet'),
})
editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
})
