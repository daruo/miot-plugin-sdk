import React from 'react';
import { View, ScrollView } from 'react-native';

import { ListItem } from 'miot/ui/ListItem';
import Separator from 'miot/ui/Separator';

export default class TutorialDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          'title': '插件通用设置项',
          'key': 'Setting'
        },
        {
          'title': '系统功能',
          'key': 'systemDemo'
        },
        {
          'title': '空白页',
          'key': 'blankDemo'
        },
        {
          'title': "JSExecutor",
          'key': 'JSExecutor'
        },
        {
          'title': 'RPC与设备交互',
          'key': 'RPCControl'
        },
        {
          'title': '与服务器交互 ',
          'key': 'callSmartHomeAPIDemo'
        },
        {
          'title': '账户信息',
          'key': 'accountDemo'
        },
        {
          'title': 'device 信息',
          'key': 'DeviceDemo'
        },
        {
          'title': '插件包信息',
          'key': 'PackageDemo'
        },
        {
          'title': '定位相关',
          'key': 'LocaleServer'
        },
        {
          'title': '系统深色模式',
          'key': 'DarkModeDemo'
        }
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Separator />
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            this.state.dataSource.map((item, index) => {
              return <ListItem
                key={index}
                title={item.title}
                onPress={() => {
                  let params = { title: item.title };
                  if (item.params) {
                    params = { params, ...item.params };
                  }
                  this.props.navigation.navigate(item.key, params);
                }} />;
            })
          }
        </ScrollView>
      </View>
    );
  }
}
