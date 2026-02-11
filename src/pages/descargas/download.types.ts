export interface DownloadItem {
  id: string
  logo: React.ComponentType<{ className?: string }>
  name: string
  description: string
  url: string
}

export interface PageInfo {
  header: {
    title: string
    subtitle: string
  }
  downloads: DownloadItem[]
}

export interface DownloadCardProps {
  download: DownloadItem
  onDownload: (url: string, fileName: string) => void
}
