"use strict";
(self["webpackChunksc_codeworks_app"] = self["webpackChunksc_codeworks_app"] || []).push([["src_app_features_tallys_tallys_module_ts"],{

/***/ 87663:
/*!**********************************************************!*\
  !*** ./src/app/features/tallys/tallys-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TallysRoutingModule": () => (/* binding */ TallysRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tallys_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tallys.component */ 77760);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ 31555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _tallys_component__WEBPACK_IMPORTED_MODULE_0__.TallysComponent,
        children: [{ path: 'tallys/add', component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__.CreateComponent }],
    },
];
class TallysRoutingModule {
}
TallysRoutingModule.ɵfac = function TallysRoutingModule_Factory(t) { return new (t || TallysRoutingModule)(); };
TallysRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TallysRoutingModule });
TallysRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TallysRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 54989:
/*!**************************************************!*\
  !*** ./src/app/features/tallys/tallys.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TallysModule": () => (/* binding */ TallysModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tallys_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tallys-routing.module */ 87663);
/* harmony import */ var _tallys_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tallys.component */ 77760);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/flex-layout */ 62681);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 20820);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ 31555);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments/comments.component */ 55847);
/* harmony import */ var _maintain_maintain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maintain/maintain.component */ 40971);
/* harmony import */ var _maintain_read_maintain_read_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintain-read/maintain-read.component */ 17751);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update/update.component */ 68063);
/* harmony import */ var _tally_posting_tally_posting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tally-posting/tally-posting.component */ 82858);
/* harmony import */ var _tally_detail_work_tally_detail_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tally-detail-work/tally-detail-work.component */ 49507);
/* harmony import */ var _tally_inquiry_tally_inquiry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tally-inquiry/tally-inquiry.component */ 60501);
/* harmony import */ var _tally_detail_comments_tally_detail_comments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tally-detail-comments/tally-detail-comments.component */ 72729);
/* harmony import */ var _tally_event_tally_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tally-event/tally-event.component */ 40762);
/* harmony import */ var _tally_detail_delete_tally_detail_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tally-detail-delete/tally-detail-delete.component */ 30804);
/* harmony import */ var _tally_detail_update_tally_detail_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tally-detail-update/tally-detail-update.component */ 59186);
/* harmony import */ var _tally_detail_putaway_location_tally_detail_putaway_location_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tally-detail-putaway-location/tally-detail-putaway-location.component */ 57075);
/* harmony import */ var _tally_putaway_update_tally_putaway_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tally-putaway-update/tally-putaway-update.component */ 70734);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _tally_detail_putaway_location_create_tally_dtl_putaway_loc_create_tally_dtl_putaway_loc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tally-detail-putaway-location/create-tally-dtl-putaway-loc/create-tally-dtl-putaway-loc.component */ 27109);
/* harmony import */ var _tally_detail_putaway_location_update_tally_dtl_putaway_loc_update_tally_dtl_putaway_loc_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tally-detail-putaway-location/update-tally-dtl-putaway-loc/update-tally-dtl-putaway-loc.component */ 76736);
/* harmony import */ var _tally_detail_comments_update_tally_dtl_comments_update_tally_dtl_comments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tally-detail-comments/update-tally-dtl-comments/update-tally-dtl-comments.component */ 94619);
/* harmony import */ var src_app_Pipes_pipe_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/Pipes/pipe.module */ 89142);
/* harmony import */ var _tally_detail_work_stock_status_stock_status_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tally-detail-work/stock-status/stock-status.component */ 66555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);












































class TallysModule {
}
TallysModule.ɵfac = function TallysModule_Factory(t) { return new (t || TallysModule)(); };
TallysModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: TallysModule });
TallysModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _tallys_routing_module__WEBPACK_IMPORTED_MODULE_0__.TallysRoutingModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule,
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__.NgxMatDatetimePickerModule,
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__.NgxMatTimepickerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_32__.MatCardModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_37__.MatSelectModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__.LayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_39__.FlexLayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__.Ng2SearchPipeModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__.MatSlideToggleModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__.MatTooltipModule, src_app_Pipes_pipe_module__WEBPACK_IMPORTED_MODULE_20__.ApplicationPipesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](TallysModule, { declarations: [_tallys_component__WEBPACK_IMPORTED_MODULE_1__.TallysComponent, _create_create_component__WEBPACK_IMPORTED_MODULE_2__.CreateComponent, _comments_comments_component__WEBPACK_IMPORTED_MODULE_3__.CommentsComponent, _maintain_maintain_component__WEBPACK_IMPORTED_MODULE_4__.MaintainComponent, _maintain_read_maintain_read_component__WEBPACK_IMPORTED_MODULE_5__.MaintainReadComponent, _update_update_component__WEBPACK_IMPORTED_MODULE_7__.UpdateComponent, _tally_posting_tally_posting_component__WEBPACK_IMPORTED_MODULE_8__.TallyPostingComponent, _tally_detail_work_tally_detail_work_component__WEBPACK_IMPORTED_MODULE_9__.TallyDetailWorkComponent, _tally_inquiry_tally_inquiry_component__WEBPACK_IMPORTED_MODULE_10__.TallyInquiryComponent, _tally_detail_comments_tally_detail_comments_component__WEBPACK_IMPORTED_MODULE_11__.TallyDetailCommentsComponent, _tally_event_tally_event_component__WEBPACK_IMPORTED_MODULE_12__.TallyEventComponent, _tally_detail_delete_tally_detail_delete_component__WEBPACK_IMPORTED_MODULE_13__.TallyDetailDeleteComponent, _tally_detail_update_tally_detail_update_component__WEBPACK_IMPORTED_MODULE_14__.TallyDetailUpdateComponent, _tally_detail_putaway_location_tally_detail_putaway_location_component__WEBPACK_IMPORTED_MODULE_15__.TallyDetailPutawayLocationComponent, _tally_putaway_update_tally_putaway_update_component__WEBPACK_IMPORTED_MODULE_16__.TallyPutawayUpdateComponent, _tally_detail_putaway_location_create_tally_dtl_putaway_loc_create_tally_dtl_putaway_loc_component__WEBPACK_IMPORTED_MODULE_17__.CreateTallyDtlPutawayLocComponent, _tally_detail_putaway_location_update_tally_dtl_putaway_loc_update_tally_dtl_putaway_loc_component__WEBPACK_IMPORTED_MODULE_18__.UpdateTallyDtlPutawayLocComponent, _tally_detail_comments_update_tally_dtl_comments_update_tally_dtl_comments_component__WEBPACK_IMPORTED_MODULE_19__.UpdateTallyDtlCommentsComponent, _tally_detail_work_stock_status_stock_status_component__WEBPACK_IMPORTED_MODULE_21__.StockStatusComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _tallys_routing_module__WEBPACK_IMPORTED_MODULE_0__.TallysRoutingModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule,
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__.NgxMatDatetimePickerModule,
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__.NgxMatTimepickerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_32__.MatCardModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_37__.MatSelectModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__.LayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_39__.FlexLayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__.Ng2SearchPipeModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__.MatSlideToggleModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__.MatTooltipModule, src_app_Pipes_pipe_module__WEBPACK_IMPORTED_MODULE_20__.ApplicationPipesModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_features_tallys_tallys_module_ts.js.map