function getImagesByProject() {
  const projectsImages = {
    'BoliPola': [
      '/assets/portfolio/evidences/bolipola1.png',
      '/assets/portfolio/evidences/bolipola2.png',
      '/assets/portfolio/evidences/bolipola3.png',
      '/assets/portfolio/evidences/bolipola4.png'
    ],
    'Akasha Studio': [
      '/assets/portfolio/evidences/akasha_full.webm',
    ]
  }

  return projectsImages
}

export const PROJECTS_IMAGES_EVIDENCES = getImagesByProject()