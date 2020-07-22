#include <stdio.h>
#include <conio.h>
#include <iostream>
#include <stdlib.h>
#include <iomanip>
using  namespace std;
class nguoi
{
	char hoten[30];
	protected: 
		char manv[5];	//ma nhan vien manv[0} = c => bien che , = h => hop dong 
		float luong;
	public:
		void nhap()
		{
			cout<<endl<<"Nhap ma nhan vien (c : bien che ; h : hop dong) : "; cin.ignore(); cin.get(manv,5);
			cout<<endl<<"Nhap ho ten nhan vien: "; cin.ignore(); cin.get(hoten,30);
		}
		void hienthi()
		{
			cout<<endl<<setw(10)<<manv<<setw(35)<<hoten<<setw(10)<<luong;
		}
};
class bienche: virtual public nguoi
{
	float hsl, phucap;
	public:
		void nhap_bc()
		{
			cout<<endl<<"Nhap he so luong: "; cin>>hsl;
			cout<<endl<<"Nhap phu cap: "; cin>>phucap;
			luong = hsl*1490000 + phucap;	
		}	
};
class hopdong: virtual public nguoi
{
	float snc, tiencong , hsvg;
	public:
		void nhap_hd()
		{
			cout<<endl<<"Nhap so ngay cong : "; cin>>snc;
			cout<<endl<<"Tien cong lao dong : "; cin>>tiencong;
			cout<<endl<<"Nhap he so vuot gio`: "; cin>>hsvg;	
			luong = (snc<=24)?snc*tiencong:24*tiencong + (snc-24)*tiencong*hsvg;
		}	
};
class nhanvien: public bienche, public hopdong
{
	 public:
	 	void nhap_nv()
		 {
			nhap();
			if(manv[0] == 'c')
				nhap_bc();
			else
			nhap_hd(); 	
		 }	
};
main()
{
	int n;
	cout<<endl<<"Nhap so nhan vien: "; cin>>n;
	nhanvien *ds = new nhanvien[n+1];
	for(int i = 0; i<n; i++)
		ds[i].nhap_nv();
	cout<<endl<<"Danh sach nhan vien.";
	for(int i=0; i < n; i++)
	ds[i].hienthi();
	getch();

}
