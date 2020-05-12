const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];


const rootNode = document.getElementById('root')

// TODO: your code goes here


function createTree(parentNode, data) {
  const folderIcon = `<i class='material-icons folder'>folder</i>`
  const folderOpenIcon = `<i class='material-icons folder'>folder_open</i>`
  const fileIcon =` <i class='material-icons file'>insert_drive_file</i>`

  const ul = document.createElement('ul')
  const wrapperNode = parentNode.appendChild(ul)
  

  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li')
    if (data[i].folder) {
      wrapperNode.appendChild(li);
      const span = document.createElement('span')
      span.innerHTML = `${folderIcon} ${data[i].title}`

      span.onclick = () => {
        let children = span.nextSibling;

        if (children.style.display === 'block') {
          span.innerHTML = `${folderIcon} ${data[i].title}`
          children.style.display = 'none';
        } else {
          span.innerHTML = `${folderOpenIcon} ${data[i].title}`
          children.style.display = 'block'
        }
      }
      li.appendChild(span)
      if (data[i].children) {
        createTree(li, data[i].children)
      } else {
        const noFiles = document.createElement('span')
        noFiles.className = 'emptyFolder'
        noFiles.innerHTML = 'Folder is empty'
        noFiles.style.display = 'none'
        li.appendChild(noFiles)
      }
    } else {
      wrapperNode.appendChild(li)
      li.innerHTML = `<span> ${fileIcon} ${data[i].title}</span>`
    }
  }
}


createTree(rootNode, data)

