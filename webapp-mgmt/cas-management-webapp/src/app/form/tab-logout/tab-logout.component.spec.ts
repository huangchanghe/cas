/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabLogoutComponent } from './tab-logout.component';
import {LogoutComponent} from "../logout/logout.component";
import {Messages} from "../../messages";
import {TabService} from "../tab.service";
import {LogouttypeevalComponent} from "../logouttypeeval/logouttypeeval.component";

describe('TabLogoutComponent', () => {
  let component: TabLogoutComponent;
  let fixture: ComponentFixture<TabLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TabLogoutComponent,LogoutComponent, LogouttypeevalComponent ],
      providers: [ Messages, TabService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
