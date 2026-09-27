/*
 * Copyright 2025 BaseMetas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEffect } from 'react';
import {
  // CheckCircleOutlined,
  GithubOutlined,
  FileTextOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';
import { Card, Button, Space, Typography } from 'antd';
import './index.scss';
import { getAppContext } from '@/utils';
const appContext = getAppContext();
import { version } from '../../../package.json';
import {
  APP_NAME_ZH,
  APP_HOME,
  APP_REPOSITORY,
  APP_DOCS,
} from '@/constant/vars';
// import logo from '../../../public/logo.png?inline'; // 隐藏 logo
import { Base64 } from 'js-base64';

const { Title, Paragraph, Link } = Typography;

export default function Welcome() {
  useEffect(() => {}, []);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className='welcome-page'>
      <Card className='welcome-card'>
        <div className='welcome-header'>
          {/* <img src={logo} className='success-icon' /> 隐藏 logo */}
          <Title level={2}>{APP_NAME_ZH}</Title>
          <Paragraph type='secondary'>COMMUNITY EDITION</Paragraph>
        </div>
      </Card>
    </div>
  );
}
