import { faCaretRight, faFolder, faFile, faImages } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen, faWindowMaximize } from '@fortawesome/free-regular-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import skillsData from '@skills-json'

function projectsFilesIconsConverter() {
  // Cambiar iconos según el tipo de archivo
  const filesIcons = {
    'GitHub': faGithubAlt,
    'Sitio web': faWindowMaximize,
    'Imágenes': faImages,
    'any': faFile
  }

  // Cambiar iconos según el tipo de archivo (Stack)
  const filesIconsStack = {}
  skillsData.forEach(item => {
    filesIconsStack[item.name] = item.icon
  })

  // Todos los iconos en un solo objeto
  const allFilesIcons = {...filesIcons, ...filesIconsStack}

  // Retornar 3 para hacer las debidas comparaciones en ProjectsList.jsx
  return [filesIcons, filesIconsStack, allFilesIcons]
}

export const projectsFilesIcons = projectsFilesIconsConverter()