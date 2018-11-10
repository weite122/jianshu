import React, { PureComponent } from 'react';
import { WriterWrapper, DownloadApp, DownloadInfo,DownloadTitle, DownloadDescription, RecommendWriter } from '../style';

class Writer extends PureComponent {

  render() {
    return (
      <WriterWrapper>
        <DownloadApp>
          <img src="//i.loli.net/2018/11/10/5be6983800039.png" alt=""/>
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