import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  /****** Only for demo) **********/
  public versions: any[] = [
    {
      name: 'Side Navigation',
      photo: 'assets/images/screenshots/side-simple-ltr.jpg',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    }, {
      name: 'Top Navigation',
      photo: 'assets/images/screenshots/top-simple-ltr.jpg',
      dest: 'inbox',
      conf: `{
        "navigationPos": "top",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    },
    {
      name: 'Dark Purple',
      photo: 'assets/images/screenshots/dark-purple-title.jpg',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": true,
        "breadcrumb": "simple"
      }`,
      theme: `{
        "name": "egret-dark-purple"
      }`
    },
    {
      name: 'Dark Pink',
      photo: 'assets/images/screenshots/dark-pink-title.jpg',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": true,
        "breadcrumb": "simple"
      }`,
      theme: `{
        "name": "egret-dark-pink"
      }`
    },
    {
      name: 'Light Blue',
      photo: 'assets/images/screenshots/light-blue-title.jpg',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": true,
        "breadcrumb": "simple"
      }`,
      theme: `{
        "name": "egret-blue"
      }`
    },
    {
      name: 'Fixed Header (Side Nav)',
      photo: 'assets/images/screenshots/side-simple-fixed.jpg',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": true,
        "breadcrumb": "simple"
      }`
    },
    {
      name: 'Title Breadcrumb (Side Nav)',
      photo: 'assets/images/screenshots/side-title-ltr.jpg',
      dest: 'tables/paging',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "title"
      }`
    }, {
      name: 'Title Breadcrumb (Top Nav)',
      photo: 'assets/images/screenshots/top-title-ltr.jpg',
      dest: 'tables/paging',
      conf: `{
        "navigationPos": "top",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "title"
      }`
    },
    {
      name: 'RTL (Side Nav)',
      photo: 'assets/images/screenshots/side-simple-rtl.jpg',
      dest: 'profile/settings',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "rtl",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    },
    {
      name: 'RTL (Top Nav)',
      photo: 'assets/images/screenshots/top-simple-rtl.jpg',
      dest: 'profile/settings',
      conf: `{
        "navigationPos": "top",
        "sidebarStyle": "full",
        "dir": "rtl",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    }
  ]

  private homePS: PerfectScrollbar;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.homePS) this.homePS.destroy();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.homePS = new PerfectScrollbar('.scrollable')
    });
  }

  /****** Remove this (Only for demo) **********/
  goToDashboard(v) {
    let origin = window.location.origin;
    if(v.theme) {
      return window.location.href = `${origin}/${v.dest}/?layout=${v.conf}&theme=${v.theme}`;
    }
    window.location.href = `${origin}/${v.dest}/?layout=${v.conf}`;
  }
}
