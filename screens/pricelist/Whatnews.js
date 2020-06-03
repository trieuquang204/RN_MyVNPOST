import React, {Component, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';

export default class Whatnews extends Component {
    render() {

        const data = [
            {
                text: 'VN Post xin thông báo, từ ngày 15/06/2019, mức thu phí xăng dầu bằng 17% trên cước chính...',
                title: 'Thông báo về việc điều chỉnh phí xăng dầu dịch vụ chuyển phát...',
                link: require('../../assets/images/news1.png'),
                contentDetail:'VN Post xin thông báo, từ ngày 15/06/2019, mức thu phụ phí xăng dầu bằng 17% trên cước chính đối với dịch vụ chuyển phát nhanh EMS hiện hành.\n' +
                    'Mức thu phụ phí xăng dầu thực hiện theo quyết định số 6185/QĐ-KDPTTT của tổng công ty EMS, có hiệu lực từ ngày 15/06/2019. Các quy định trước đây trái với quyết định này đều được bãi bỏ\n' +
                    'Thông báo đến khách hàng đang sử dụng dịch vụ EMS về thời gian áp dụng phụ phí xăng dầu dịch vụ EMS mới. Thông tin đến khách hàng việc điều chỉnh phụ phí xăng dầu dịch vụ EMS trong nước nhằm bù đắp chi phí do chi phí nhiên liệu và phí vận chuyển hàng không tăng lên trong thời gian qua. VN Post xin thông báo, từ ngày 15/06/2019, mức thu phụ phí xăng dầu bằng 17% trên cước chính đối với dịch vụ chuyển phát nhanh EMS hiện hành.\n' +
                    'Mức thu phụ phí xăng dầu thực hiện theo quyết định số 6185/QĐ-KDPTTT của tổng công ty EMS, có hiệu lực từ ngày 15/06/2019. Các quy định trước đây trái với quyết định này đều được bãi bỏ\n' +
                    'Thông báo đến khách hàng đang sử dụng dịch vụ EMS về thời gian áp dụng phụ phí xăng dầu dịch vụ EMS mới. Thông tin đến khách hàng việc điều chỉnh phụ phí xăng dầu dịch vụ EMS trong nước nhằm bù đắp chi phí do chi phí nhiên liệu và phí vận chuyển hàng không tăng lên trong thời gian qua. VN Post xin thông báo, từ ngày 15/06/2019, mức thu phụ phí xăng dầu bằng 17% trên cước chính đối với dịch vụ chuyển phát nhanh EMS hiện hành.\n' +
                    'Mức thu phụ phí xăng dầu thực hiện theo quyết định số 6185/QĐ-KDPTTT của tổng công ty EMS, có hiệu lực từ ngày 15/06/2019. Các quy định trước đây trái với quyết định này đều được bãi bỏ\n' +
                    'Thông báo đến khách hàng đang sử dụng dịch vụ EMS về thời gian áp dụng phụ phí xăng dầu dịch vụ EMS mới. Thông tin đến khách hàng việc điều chỉnh phụ phí xăng dầu dịch vụ EMS trong nước nhằm bù đắp chi phí do chi phí nhiên liệu và phí vận chuyển hàng không tăng lên trong thời gian qua. VN Post xin thông báo, từ ngày 15/06/2019, mức thu phụ phí xăng dầu bằng 17% trên cước chính đối với dịch vụ chuyển phát nhanh EMS hiện hành.\n' +
                    'Mức thu phụ phí xăng dầu thực hiện theo quyết định số 6185/QĐ-KDPTTT của tổng công ty EMS, có hiệu lực từ ngày 15/06/2019. Các quy định trước đây trái với quyết định này đều được bãi bỏ\n' +
                    'Thông báo đến khách hàng đang sử dụng dịch vụ EMS về thời gian áp dụng phụ phí xăng dầu dịch vụ EMS mới. Thông tin đến khách hàng việc điều chỉnh phụ phí xăng dầu dịch vụ EMS trong nước nhằm bù đắp chi phí do chi phí nhiên liệu và phí vận chuyển hàng không tăng lên trong thời gian qua.'
            },
            {
                text: 'Cập nhật chức năng quản lý danh bạ địa chỉ người nhận . Hệ thống hỗ trợ khách hàng lưu trữ địa chỉ người nhận...',
                key: 'Có thể do bưu cục cập nhật mã CRM cho khách hàng, nhưng app của khách hàng chưa cập nhật lại. Bưu tá thông báo với khách hàng logout ra và đăng nhập lại',
                title: 'Quản lí danh bạ người dùng',
                link: require('../../assets/images/news2.png'),
                contentDetail:'Cập nhật chức năng quản lý danh bạ địa chỉ người nhận\n' +
                    'Hệ thống hỗ trợ khách hàng lưu trữ địa chỉ người nhận trên màn hình Danh bạ địa chỉ người nhận. Tại chức năng này, khách hàng có thể thêm mới danh bạ địa chỉ người nhận, add người nhận vào sổ đen, xóa địa chỉ người nhận…Các chức năng chính trong quản lý danh bạ địa chỉ gồm\n' +
                    'Thêm mới địa chỉ người nhận\n' +
                    'Trường hợp khách hàng muốn chủ động thêm mới một người nhận bất kỳ vào danh sách, cần thực hiện như sau:\n' +
                    'Bước 1: Trên màn hình Menu, chọn Danh sách người nhận. Một danh sách người nhận được hiển thị trên màn hình Danh sách người nhận\n' +
                    'Bước 2: Nhấn vào icon [+] trên màn hình Danh sách người nhận Cập nhật chức năng quản lý danh bạ địa chỉ người nhận\n' +
                    'Hệ thống hỗ trợ khách hàng lưu trữ địa chỉ người nhận trên màn hình Danh bạ địa chỉ người nhận. Tại chức năng này, khách hàng có thể thêm mới danh bạ địa chỉ người nhận, add người nhận vào sổ đen, xóa địa chỉ người nhận…Các chức năng chính trong quản lý danh bạ địa chỉ gồm\n' +
                    'Thêm mới địa chỉ người nhận\n' +
                    'Trường hợp khách hàng muốn chủ động thêm mới một người nhận bất kỳ vào danh sách, cần thực hiện như sau:\n' +
                    'Bước 1: Trên màn hình Menu, chọn Danh sách người nhận. Một danh sách người nhận được hiển thị trên màn hình Danh sách người nhận\n' +
                    'Bước 2: Nhấn vào icon [+] trên màn hình Danh sách người nhận Cập nhật chức năng quản lý danh bạ địa chỉ người nhận\n' +
                    'Hệ thống hỗ trợ khách hàng lưu trữ địa chỉ người nhận trên màn hình Danh bạ địa chỉ người nhận. Tại chức năng này, khách hàng có thể thêm mới danh bạ địa chỉ người nhận, add người nhận vào sổ đen, xóa địa chỉ người nhận…Các chức năng chính trong quản lý danh bạ địa chỉ gồm\n' +
                    'Thêm mới địa chỉ người nhận\n' +
                    'Trường hợp khách hàng muốn chủ động thêm mới một người nhận bất kỳ vào danh sách, cần thực hiện như sau:\n' +
                    'Bước 1: Trên màn hình Menu, chọn Danh sách người nhận. Một danh sách người nhận được hiển thị trên màn hình Danh sách người nhận\n' +
                    'Bước 2: Nhấn vào icon [+] trên màn hình Danh sách người nhận'
            },
            {
                text: 'Về tra cứu bưu cục, khách hàng có thể tra cứu được các bưu cục gần địa điểm hiện tại , tìm kiếm được các bưu cục...',
                key: 'Trên app có chức năng cộng thêm cước vào tiền thu hộ. Chức năng này sẽ được hiển thị sau khi xác nhận cước phí...',
                title: 'Tra cứu bưu cục',
                link: require('../../assets/images/news3.png'),
                contentDetail:' Tra cứu bưu cục \n' +
                    'Về tra cứu bưu cục, khách hàng có thể tra cứu được các bưu cục gần địa điểm hiện tại, tìm kiếm được các bưu cục cụ thể bằng mã bưu cục, địa chỉ, tên bưu cục và có chỉ dẫn đường thông qua app Google Map\n' +
                    'Hiển thị bưu cục gần nhất với vị trí người dùng\n' +
                    'Hệ thống hỗ trợ khách hàng tìm được bưu cục gần vị trí khách hàng hiện tại. Điều kiện là cung cấp cho thiết bị quyền truy cập vị trí như hình dưới:\n' +
                    'Trường hợp vị trí hiện tại bị trôi xa khỏi màn hình hiển thị Map, khách hàng có thể nhấn vào icon như dưới:\n' +
                    'Tra cứu bưu cục\n' +
                    'Khách hàng có thể thực hiện tra cứu bưu cục bằng 2 cách:'
            },
            {
                text: 'Để minh bạch cách thức tính cước, hệ thống hỗ trợ khách hàng chức năng tính thử cước. Tại đây khách hàng có thể...',
                key: 'Vì trên hệ thống CMS đang thống kê theo ngày tạo đơn hàng , không cùng tiêu chí thống kê với các hệ thống khác',
                title: 'Tính thử cước',
                link: require('../../assets/images/news4.png'),
            },
            {
                text: 'Hệ thống hỗ trợ thêm người nhận vào số đen. Với những người nhân này, khách hàng vẫn có thể tạo đơn và gửi...',
                key: 'Với hệ thống Mobile và web MCS mới, khách hàng có thể nhìn thấy tất cả các đơn hàng phát sinh từ mã CRM đã được bưu cục cấp ',
                title: 'Thêm người nhận vào số đen',
                link: require('../../assets/images/news5.png'),
            },

        ];
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('WhatnewsDetail', item)}>
                            <View style={style.boder}>
                                <View style={{flex: 1.5}}>
                                    <Image source={item.link} style={style.img}></Image>
                                </View>
                                <View style={{flex: 4.5, }}>
                                    <Text style={style.textView}>{item.title}</Text>
                                    <Text style={{
                                        fontWeight: '200',
                                        color: '#989898',
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                    }}>{item.text}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                    }
                    keyExtractor={item => item.text}

                />
            </View>
        );
    }
}
const style = StyleSheet.create(
    {
        boder: {
            flexDirection: 'row',
            paddingTop: 10,
            marginTop: 20,
            backgroundColor: '#F2F2F2',
            paddingBottom: 10,
            elevation: 5,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
        },
        textView:
            {
                flex: 2,
                fontWeight: 'bold',
                flexDirection: 'column',
                paddingLeft: 5,
            },
        img: {
            width: '100%',
            height: '100%',
            flex: 1,
        },
    },
);
