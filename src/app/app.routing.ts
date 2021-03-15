import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { RegisterComponent } from './views/register/register.component';
import { TestcategoryComponent } from './views/Test/testcategory/testcategory.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserdetailsComponent } from './views/userdetails/userdetails.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { TimerComponent } from './views/timer/timer.component';
import { SchoolsetupComponent } from './views/schoolsetup/schoolsetup.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { SurveyComponent } from './views/survey/survey.component';
import { MainPageComponent } from './views/MainPage/MainPage.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'Register Page'
    }
  },
 
  {
    path: 'category',
    component: TestcategoryComponent,
    data: {
      title: 'Test Category'
    }
  },

  {
    path: 'user',
    component: UserdetailsComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'User Details'
    }

  },


  {
    path: 'home',
    component: HomepageComponent,
    data: {
      title: 'Home Page Test'
    }
  },

  {
    path: 'create',
    component: SchoolsetupComponent,
    data: {
      title: 'Create School'
    }
  },
  {
    path: 'course',
    component: MainPageComponent,
    data: {
      title: 'Course Page'
    }
  },
  {
    path: 'landingpage',
    component: LandingpageComponent,
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'survey',
    component: SurveyComponent,
    data: {
      title: 'Survey Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'timer',
    component: TimerComponent,
    data: {
      title: 'Timer Page'
    }
  },
 

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
