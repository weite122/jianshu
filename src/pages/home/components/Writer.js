import React, { PureComponent } from 'react';
import { WriterWrapper, DownloadApp, DownloadInfo,DownloadTitle, DownloadDescription, RecommendWriter } from '../style';

class Writer extends PureComponent {

  render() {
    return (
      <WriterWrapper>
        <DownloadApp>
          <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          <DownloadInfo>
            <DownloadTitle>
              下载简书手机App
            </DownloadTitle>
            <DownloadDescription>
              随时随地发现和创作内容
            </DownloadDescription>
          </DownloadInfo>
        </DownloadApp>
        <RecommendWriter>

        </RecommendWriter>
      </WriterWrapper>
    )
  }
}

export default Writer;