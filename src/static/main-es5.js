(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/tPW":
    /*!**************************************************!*\
      !*** ./src/app/schedules/schedules.component.ts ***!
      \**************************************************/

    /*! exports provided: SchedulesComponent */

    /***/
    function tPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function () {
        return SchedulesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _timetable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../timetable.service */
      "0zDM");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../firebase.service */
      "k0Fy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SchedulesComponent_div_18_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a schedule name. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SchedulesComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchedulesComponent_div_18_p_1_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scheduleForm.controls.schedule.errors == null ? null : ctx_r0.scheduleForm.controls.schedule.errors.required);
        }
      }

      function SchedulesComponent_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.saveSchedule();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.x.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.x.length == 0);
        }
      }

      function SchedulesComponent_div_29_div_12_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please fill in all fields. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SchedulesComponent_div_29_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchedulesComponent_div_29_div_12_p_1_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r10.scheduleBuilderForm.controls.sub.errors == null ? null : ctx_r10.scheduleBuilderForm.controls.sub.errors.required) || (ctx_r10.scheduleBuilderForm.controls.courseCode.errors == null ? null : ctx_r10.scheduleBuilderForm.controls.courseCode.errors.required));
        }
      }

      function SchedulesComponent_div_29_li_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_div_29_li_14_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var i_r13 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.deleteCourse(i_r13, i_r13.courseInfo[0].classNum);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate8"](" ", i_r13.subject, " ", i_r13.course, " ", i_r13.courseInfo[0].component, " ", i_r13.courseInfo[0].section, ": ", i_r13.courseInfo[0].days, " ", i_r13.courseInfo[0].start, "-", i_r13.courseInfo[0].end, " (", i_r13.courseInfo[0].room, ") ");
        }
      }

      function SchedulesComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Schedule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subject:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Course Code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_div_29_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.addCourse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SchedulesComponent_div_29_div_12_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SchedulesComponent_div_29_li_14_Template, 4, 8, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.scheduleBuilderForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.scheduleBuilderForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.scheduleBuilderForm.invalid && (ctx_r2.scheduleBuilderForm.dirty || ctx_r2.scheduleBuilderForm.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.x);
        }
      }

      function SchedulesComponent_li_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_li_35_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var schedule_r18 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.edit(schedule_r18.sName, schedule_r18.show);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_li_35_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var schedule_r18 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.deleteOne(schedule_r18.sName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var schedule_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", schedule_r18.vis == "true" ? "../../assets/public.svg" : "../../assets/private.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", schedule_r18.sName, " (", schedule_r18.num, " courses) ");
        }
      }

      function SchedulesComponent_div_36_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description (optional):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Public?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_div_36_div_4_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.updateSchedule();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r24 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r24);
        }
      }

      function SchedulesComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_div_36_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SchedulesComponent_div_36_div_4_Template, 16, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.editForm.get("dataItems").controls);
        }
      }

      function SchedulesComponent_div_56_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please fill in all values. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SchedulesComponent_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchedulesComponent_div_56_p_1_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.reviewForm.controls.subject.errors == null ? null : ctx_r5.reviewForm.controls.subject.errors.required) || (ctx_r5.reviewForm.controls.course.errors == null ? null : ctx_r5.reviewForm.controls.course.errors.required) || (ctx_r5.reviewForm.controls.review.errors == null ? null : ctx_r5.reviewForm.controls.review.errors.required));
        }
      }

      function SchedulesComponent_div_75_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please fill in all values. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SchedulesComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchedulesComponent_div_75_p_1_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.updatePasswordForm.controls.current.errors == null ? null : ctx_r6.updatePasswordForm.controls.current.errors.required) || (ctx_r6.updatePasswordForm.controls["new"].errors == null ? null : ctx_r6.updatePasswordForm.controls["new"].errors.required) || (ctx_r6.updatePasswordForm.controls.confirm.errors == null ? null : ctx_r6.updatePasswordForm.controls.confirm.errors.required));
        }
      }

      var SchedulesComponent = /*#__PURE__*/function () {
        function SchedulesComponent(timetableService, firebaseService, fb) {
          _classCallCheck(this, SchedulesComponent);

          this.timetableService = timetableService;
          this.firebaseService = firebaseService;
          this.fb = fb; // Global variables

          this.schedules = [];
          this.info = [];
          this.x = [];
          this.exist = [];
          this.dataItems = []; // Form inputs

          this.scheduleName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.scheduleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            visibility: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.scheduleBuilderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sub: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            courseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
          this.reviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            course: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            review: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
          this.updatePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            current: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            "new": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
          this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dataItems: this.fb.array([])
          });
        }

        _createClass(SchedulesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this.timetableService.getPrivateSchedules(res).subscribe(function (data) {
                  // Extract name of user
                  _this.name = data[0].user; // Push schedules into array to display

                  data[0].schedules.forEach(function (e) {
                    _this.schedules.push({
                      sName: e.scheduleName,
                      num: e.numCourses,
                      vis: e.visibility,
                      show: false
                    });
                  }); // Check if user has admin access

                  if (data[0].access === "admin") {
                    _this.firebaseService.isAdmin = true;
                    localStorage.setItem('admin', 'yes');
                  }
                });
              }
            });
          } // Create a new schedule

        }, {
          key: "createSchedule",
          value: function createSchedule() {
            var _this2 = this;

            // Extract input values
            var sched = this.scheduleForm.controls.schedule.value;
            var desc = this.scheduleForm.controls.description.value;
            var vis = this.scheduleForm.controls.visibility.value; // Set blank to false (visibility)

            if (vis == '') vis = "false";
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this2.timetableService.createSchedule(res, sched, desc, vis).subscribe(function (data) {
                  if (data) {
                    alert("A schedule with the name \"".concat(sched, "\" was created"));
                    window.location.reload();
                  }
                });
              }
            });
          }
        }, {
          key: "updateSchedule",
          value: function updateSchedule() {
            var _this3 = this;

            // Extract input values
            var sched = this.editForm.controls.dataItems.value[0].schedule;
            var desc = this.editForm.controls.dataItems.value[0].description;
            var vis = this.editForm.controls.dataItems.value[0].visibility; // Enforce mandatory field

            if (sched == '') {
              alert('Please enter a schedule name');
            } else {
              this.firebaseService.getToken().then(function (res) {
                // Check if user is logged in
                if (res) {
                  _this3.timetableService.updateSchedule(res, sched, desc, vis, _this3.nameToUpdate).subscribe(function (data) {
                    alert('Update successful');
                    window.location.reload();
                  });
                }
              });
            }
          } // Get the list of subject code, course code pairs for a given schedule

        }, {
          key: "viewSchedule",
          value: function viewSchedule(schedule) {
            var _this4 = this;

            this.x = [];
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                // Add to arrays
                _this4.timetableService.viewSchedule(res, schedule).subscribe(function (data) {
                  data[0].schedules[0].courses.forEach(function (e) {
                    _this4.exist.push(e.courseInfo[0].classNum);

                    _this4.x.push(e);
                  });
                  _this4.showSB = true;
                });
              }
            });
          } // Delete a schedule with a given name

        }, {
          key: "deleteOne",
          value: function deleteOne(schedule) {
            var _this5 = this;

            if (confirm("Are you sure you want to delete the schedule \"".concat(schedule, "\"?"))) {
              this.firebaseService.getToken().then(function (res) {
                // Check if user is logged in
                if (res) {
                  _this5.timetableService.deleteOne(res, schedule).subscribe(function (data) {
                    alert(data.message);
                    window.location.reload();
                  });
                }
              });
            }
          } // Add course to schedule builder

        }, {
          key: "addCourse",
          value: function addCourse() {
            var _this6 = this;

            // Extract input values
            var sb = this.scheduleBuilderForm.controls.sub.value.toUpperCase();
            var cc = this.scheduleBuilderForm.controls.courseCode.value.toUpperCase();
            this.timetableService.getTimetableInfo(sb, cc).subscribe(function (data) {
              _this6.info = data; // If subject+course combo exists

              if (data != undefined) {
                // Course does not already exists in draft
                if (!_this6.exist.find(function (e) {
                  return e == _this6.info[0].classNum;
                })) {
                  _this6.x.push({
                    "subject": sb,
                    "course": cc,
                    "courseInfo": _this6.info
                  });

                  _this6.exist.push(_this6.info[0].classNum);
                } // Course exists
                else {
                    alert('Cannot add duplicate courses!');
                  }
              }
            });
          } // Delete course in schedule builder

        }, {
          key: "deleteCourse",
          value: function deleteCourse(i, j) {
            this.x = this.x.filter(function (e) {
              return e !== i;
            });
            this.exist = this.exist.filter(function (e) {
              return e !== j;
            });
          } // Save a list of subject code, course code pairs under a given schedule name

        }, {
          key: "saveSchedule",
          value: function saveSchedule() {
            var _this7 = this;

            // Extract input values
            var sch = this.scheduleName.value;
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this7.timetableService.saveSchedule(res, sch, _this7.x).subscribe(function (data) {
                  alert("Schedule ".concat(sch, " has been built"));
                  window.location.reload();
                });
              }
            });
          }
        }, {
          key: "edit",
          value: function edit(schedule, show) {
            var _this8 = this;

            var vis;
            show = !show;
            this.show = true;
            this.nameToUpdate = schedule;
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this8.timetableService.viewSchedule(res, schedule).subscribe(function (data) {
                  // Set visibility flag
                  if (data[0].schedules[0].visibility == "false") {
                    vis = false;
                  } else {
                    vis = true;
                  } // Set data items to stored values


                  _this8.dataItems = [{
                    schedule: data[0].schedules[0].scheduleName,
                    description: data[0].schedules[0].description,
                    visibility: vis
                  }]; // Create new form group on editForm

                  _this8.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    dataItems: _this8.fb.array([])
                  }); // Add controls that assigns dataItems

                  _this8.editForm.setControl("dataItems", _this8.setExistingItems(_this8.dataItems));
                });
              }
            });
          } // Close edit modal

        }, {
          key: "close",
          value: function close() {
            this.show = false;
          } // Push values to formArray

        }, {
          key: "setExistingItems",
          value: function setExistingItems(items) {
            var _this9 = this;

            var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
            items.forEach(function (s) {
              formArray.push(_this9.fb.group({
                schedule: s.schedule,
                description: s.description,
                visibility: s.visibility
              }));
            });
            return formArray;
          }
        }, {
          key: "submitReview",
          value: function submitReview() {
            var _this10 = this;

            // Extract input values
            var sb = this.reviewForm.controls.subject.value.toUpperCase();
            var cc = this.reviewForm.controls.course.value.toUpperCase();
            var review = this.reviewForm.controls.review.value;

            if (confirm("Are you sure you want to post this review to ".concat(sb, " ").concat(cc, "?"))) {
              this.firebaseService.getToken().then(function (res) {
                // Check if user is logged in
                if (res) {
                  _this10.timetableService.writeReview(res, sb, cc, review).subscribe(function (data) {
                    if (data) {
                      alert('Review posted!');
                      window.location.reload();
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "updatePassword",
          value: function updatePassword() {
            // Extract input values
            var oldPwd = this.updatePasswordForm.controls.current.value;
            var newPwd = this.updatePasswordForm.controls["new"].value;
            var confirmPwd = this.updatePasswordForm.controls.confirm.value; // Error if password less than 6 characters

            if (newPwd.length < 6) {
              alert("Password must be at least 6 characters long");
            } // Error if passwords don't match
            else if (newPwd != confirmPwd) {
                alert("Confirm password does not match");
              } // Change password
              else {
                  this.firebaseService.changePassword(oldPwd, newPwd);
                }
          }
        }]);

        return SchedulesComponent;
      }();

      SchedulesComponent.ɵfac = function SchedulesComponent_Factory(t) {
        return new (t || SchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_timetable_service__WEBPACK_IMPORTED_MODULE_2__["TimetableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      SchedulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SchedulesComponent,
        selectors: [["app-schedules"]],
        decls: 76,
        vars: 16,
        consts: [[1, "left"], [1, "schedules"], [3, "formGroup"], ["formControlName", "schedule", "name", "schedule", "type", "text"], ["formControlName", "description", "name", "description", "type", "text"], ["formControlName", "visibility", "name", "visibility", "type", "checkbox"], [3, "disabled", "click"], [4, "ngIf"], [1, "schedule-builder"], ["class", "save", 3, "disabled", "click", 4, "ngIf"], ["name", "schedule", "type", "text", 3, "formControl"], [1, "right"], [1, "schedule-list"], [4, "ngFor", "ngForOf"], ["class", "edit-schedule", 4, "ngIf"], [1, "reviews"], ["formControlName", "subject", "name", "subject", "type", "text", 1, "input-edit"], ["formControlName", "course", "name", "course", "type", "text", 1, "input-edit"], ["rows", "5", "formControlName", "review", "name", "review", "type", "text", 1, "input-edit"], [1, "password"], ["formControlName", "current", "name", "current", "type", "password"], ["formControlName", "new", "name", "new", "type", "password"], ["formControlName", "confirm", "name", "confirm", "type", "password"], [1, "save", 3, "disabled", "click"], ["formControlName", "sub", "name", "sub", "type", "text"], ["formControlName", "courseCode", "name", "courseCode", "type", "text"], ["id", "builder-output"], [1, "delete", 3, "click"], [3, "src"], [1, "details", 3, "click"], [1, "edit-schedule"], [1, "delete", "position", 3, "click"], ["formArrayName", "dataItems", 4, "ngFor", "ngForOf"], ["formArrayName", "dataItems"], [3, "formGroupName"], ["formControlName", "schedule", "name", "schedule", "type", "text", 1, "input-edit"], ["formControlName", "description", "name", "description", "type", "text", 1, "input-edit"], [1, "create", 3, "click"]],
        template: function SchedulesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create a Schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description (optional):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Public?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_Template_button_click_16_listener() {
              return ctx.createSchedule();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SchedulesComponent_div_18_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SchedulesComponent_button_20_Template, 2, 3, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Build a Schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_Template_button_click_27_listener() {
              return ctx.viewSchedule(ctx.scheduleName.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SchedulesComponent_div_29_Template, 15, 4, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "My Schedules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SchedulesComponent_li_35_Template, 7, 3, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SchedulesComponent_div_36_Template, 5, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Write a Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Subject:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Course Code:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Review:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "textarea", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_Template_button_click_54_listener() {
              return ctx.submitReview();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SchedulesComponent_div_56_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Update Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Current Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "New Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Confirm New Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulesComponent_Template_button_click_73_listener() {
              return ctx.updatePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SchedulesComponent_div_75_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi there, ", ctx.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.scheduleForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.scheduleForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scheduleForm.invalid && (ctx.scheduleForm.dirty || ctx.scheduleForm.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSB);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.scheduleName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.scheduleName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSB);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedules);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reviewForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.reviewForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewForm.invalid && (ctx.reviewForm.dirty || ctx.reviewForm.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updatePasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updatePasswordForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updatePasswordForm.invalid && (ctx.updatePasswordForm.dirty || ctx.updatePasswordForm.touched));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
        styles: [".schedules[_ngcontent-%COMP%] {\n    border: 2px solid lightseagreen;\n    border-radius: 5px;\n    background-color: rgba(32, 178, 170, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px\n}\n\n.view[_ngcontent-%COMP%] {\n    background-color: #6dcc70;\n    border: none;\n    color: white;\n    font-weight: bold;\n    padding: 10px 24px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 14px;\n    margin: 4px 2px;\n    cursor: pointer;\n    float: right;\n  }\n\n.delete-all[_ngcontent-%COMP%] {\n    background-color: #e94545;\n    border: none;\n    color: white;\n    font-weight: bold;\n    padding: 10px 24px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 14px;\n    margin: 4px 2px;\n    cursor: pointer;\n    float: right;\n}\n\n.schedule-builder[_ngcontent-%COMP%] {\n    border: 2px solid lightslategray;\n    border-radius: 5px;\n    background-color: rgba(119, 136, 153, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n}\n\n.save[_ngcontent-%COMP%] {\n    background-color: #058cb9;\n    border: none;\n    color: white;\n    font-weight: bold;\n    padding: 10px 24px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 14px;\n    margin: 4px 2px;\n    cursor: pointer;\n    float: right;\n}\n\n.disabled[_ngcontent-%COMP%] {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\nbutton.delete[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    background-color: gray;\n    border: none;\n    border-radius: 1px;\n    color: white;\n}\n\n.position[_ngcontent-%COMP%] {\n    float: right;\n    margin-bottom: 5px;\n}\n\n.schedule-list[_ngcontent-%COMP%] {\n    border: 2px solid darkseagreen;\n    border-radius: 5px;\n    background-color: rgba(143, 188, 143, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n}\n\n.reviews[_ngcontent-%COMP%] {\n    border: 2px solid darkslateblue;\n    border-radius: 5px;\n    background-color: rgba(72, 61, 139, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n}\n\nli[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n.left[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 67%;\n    clear: both;\n}\n\n.right[_ngcontent-%COMP%] {\n    position: relative;\n    float: right;\n    width: 30%;\n}\n\n.details[_ngcontent-%COMP%] {\n\tbackground-color:#f9f9f9;\n\tborder-radius: 5px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#666666;\n\ttext-decoration:none;\n    text-shadow:0px 1px 0px #ffffff;\n}\n\n.details[_ngcontent-%COMP%]:hover {\n\tbackground-color:#e9e9e9;\n}\n\n.details[_ngcontent-%COMP%]:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n.edit-schedule[_ngcontent-%COMP%] {\n    border: 2px dotted gray;\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px\n}\n\n.input-edit[_ngcontent-%COMP%] {\n    width:95%;\n    margin-bottom: 10px;\n    font-family: Arial, Helvetica, sans-serif\n}\n\nbutton.create[_ngcontent-%COMP%] {\n    float: right;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 15px;\n    height: auto;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    resize: none;\n}\n\n.password[_ngcontent-%COMP%] {\n    border: 2px solid royalblue;\n    border-radius: 5px;\n    background-color: rgba(65, 105, 225, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;  \n}\n\ninput[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGVzL3NjaGVkdWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkOztBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFRTtDQUNELHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsYUFBYTtDQUNiLG9CQUFvQjtJQUNqQiwrQkFBK0I7QUFDbkM7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsT0FBTztBQUNSOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsZXMvc2NoZWR1bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NoZWR1bGVzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAxNzgsIDE3MCwgMC4yNSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG59XG5cbi52aWV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRjYzcwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbi5kZWxldGUtYWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk0NTQ1O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2NoZWR1bGUtYnVpbGRlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAxMzYsIDE1MywgMC4yNSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2F2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OGNiOTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDRweCAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuYnV0dG9uLmRlbGV0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucG9zaXRpb24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zY2hlZHVsZS1saXN0IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2VhZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxODgsIDE0MywgMC4yNSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucmV2aWV3cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya3NsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MiwgNjEsIDEzOSwgMC4yNSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5saSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubGVmdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjclO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4ucmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuICAuZGV0YWlscyB7XG5cdGJhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXI6MXB4IHNvbGlkICNkY2RjZGM7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0Y29sb3I6IzY2NjY2Njtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgdGV4dC1zaGFkb3c6MHB4IDFweCAwcHggI2ZmZmZmZjtcbn1cbi5kZXRhaWxzOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xufVxuLmRldGFpbHM6YWN0aXZlIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHRvcDoxcHg7XG59IFxuXG4uZWRpdC1zY2hlZHVsZSB7XG4gICAgYm9yZGVyOiAycHggZG90dGVkIGdyYXk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG59XG5cbi5pbnB1dC1lZGl0IHtcbiAgICB3aWR0aDo5NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxufVxuXG5idXR0b24uY3JlYXRlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4ucGFzc3dvcmQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJveWFsYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgMTA1LCAyMjUsIDAuMjUpO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgIFxufVxuXG5pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-schedules',
            templateUrl: './schedules.component.html',
            styleUrls: ['./schedules.component.css']
          }]
        }], function () {
          return [{
            type: _timetable_service__WEBPACK_IMPORTED_MODULE_2__["TimetableService"]
          }, {
            type: _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/jennyli/Documents/Year 4/SE 3316/se3316-jli2788-lab5/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0zDM":
    /*!**************************************!*\
      !*** ./src/app/timetable.service.ts ***!
      \**************************************/

    /*! exports provided: TimetableService */

    /***/
    function zDM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimetableService", function () {
        return TimetableService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TimetableService = /*#__PURE__*/function () {
        function TimetableService(http) {
          _classCallCheck(this, TimetableService);

          this.http = http; // Define common routes

          this.SCHED_URL = 'schedules';
          this.REVIEW_URL = 'reviews';
          this.POLICY_URL = 'policy';
        } // Get timetable entry for given subject code, course code and optional course component


        _createClass(TimetableService, [{
          key: "getTimetableInfo",
          value: function getTimetableInfo(sub, course) {
            return this.http.get("/subjects/".concat(sub, "/").concat(course)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Keyword search

        }, {
          key: "getKeywordInfo",
          value: function getKeywordInfo(key) {
            return this.http.get("/keyword/".concat(key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Register new user

        }, {
          key: "register",
          value: function register(user, email) {
            return this.http.post('/register', {
              "user": user,
              "email": email
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Write a review

        }, {
          key: "writeReview",
          value: function writeReview(token, sub, course, review) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.post("/".concat(this.REVIEW_URL), {
              "subject": sub,
              "course": course,
              "review": review
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Create a new schedule

        }, {
          key: "createSchedule",
          value: function createSchedule(token, schedule, description, visibility) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.post("/".concat(this.SCHED_URL), {
              "scheduleName": schedule,
              "description": description,
              "visibility": visibility
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Update name / description / visibility of a schedule

        }, {
          key: "updateSchedule",
          value: function updateSchedule(token, schedule, description, visibility, oldName) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.put("/".concat(this.SCHED_URL, "/").concat(oldName), {
              "scheduleName": schedule,
              "description": description,
              "visibility": visibility
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Save a list of subject code, course code pairs under a given schedule name

        }, {
          key: "saveSchedule",
          value: function saveSchedule(token, schedule, x) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.post("/".concat(this.SCHED_URL, "/").concat(schedule), {
              "courseList": x
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Get the list of subject code, course code pairs for a given schedule

        }, {
          key: "viewSchedule",
          value: function viewSchedule(token, schedule) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.get("/".concat(this.SCHED_URL, "/").concat(schedule), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Delete a schedule with a given name

        }, {
          key: "deleteOne",
          value: function deleteOne(token, schedule) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http["delete"]("/".concat(this.SCHED_URL, "/").concat(schedule), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // View personal schedules

        }, {
          key: "getPrivateSchedules",
          value: function getPrivateSchedules(token) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.get("/".concat(this.SCHED_URL), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Get a list of public schedule names and the number of courses that are saved in each schedule

        }, {
          key: "getPublicSchedules",
          value: function getPublicSchedules() {
            return this.http.get('/publicschedules').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // List of reviews

        }, {
          key: "getReviews",
          value: function getReviews() {
            return this.http.get("/".concat(this.REVIEW_URL)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Toggle review visibility

        }, {
          key: "reviewVisibility",
          value: function reviewVisibility(token, c, r, v) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.put("/".concat(this.REVIEW_URL), {
              "courseID": c,
              "review": r,
              "visibility": v
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Update account settings, such as access and status

        }, {
          key: "changeAccountSettings",
          value: function changeAccountSettings(token, email, access, status) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.put('/account', {
              "email": email,
              "access": access,
              "status": status
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Display single policy

        }, {
          key: "viewPolicy",
          value: function viewPolicy(token, policy) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.get("/".concat(this.POLICY_URL, "/").concat(policy), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Publicly display all policies

        }, {
          key: "viewAllPolicies",
          value: function viewAllPolicies() {
            return this.http.get("/".concat(this.POLICY_URL)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Update a policy

        }, {
          key: "updatePolicy",
          value: function updatePolicy(token, policy, text) {
            var headers = {
              'Authorization': 'Bearer ' + token
            };
            return this.http.put("/".concat(this.POLICY_URL), {
              "policy": policy,
              "text": text
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError()));
          } // Handle failed HTTP operations

        }, {
          key: "handleError",
          value: function handleError(result) {
            return function (error) {
              // Display error in alert
              alert(error.error); // Let the app keep running by returning an empty result.

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
            };
          }
        }]);

        return TimetableService;
      }();

      TimetableService.ɵfac = function TimetableService_Factory(t) {
        return new (t || TimetableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      TimetableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TimetableService,
        factory: TimetableService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimetableService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "4COs":
    /*!**************************************************!*\
      !*** ./src/app/copyright/copyright.component.ts ***!
      \**************************************************/

    /*! exports provided: CopyrightComponent */

    /***/
    function COs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function () {
        return CopyrightComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _timetable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../timetable.service */
      "0zDM");

      var CopyrightComponent = /*#__PURE__*/function () {
        function CopyrightComponent(timetableService) {
          _classCallCheck(this, CopyrightComponent);

          this.timetableService = timetableService;
        }

        _createClass(CopyrightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            // Populate page
            this.timetableService.viewAllPolicies().subscribe(function (data) {
              data.forEach(function (e) {
                if (e.name == "Security and Privacy Policy") _this11.sp = e.text;else if (e.name == "DMCA Notice and Takedown Policy") _this11.dmca = e.text;else _this11.aup = e.text;
              });
            });
          }
        }]);

        return CopyrightComponent;
      }();

      CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) {
        return new (t || CopyrightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_timetable_service__WEBPACK_IMPORTED_MODULE_1__["TimetableService"]));
      };

      CopyrightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CopyrightComponent,
        selectors: [["app-copyright"]],
        decls: 10,
        vars: 3,
        consts: [[1, "copyright"]],
        template: function CopyrightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Security and Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DMCA Notice and Takedown Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Acceptable Use Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sp, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dmca, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aup, "\n");
          }
        },
        styles: ["h2[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.copyright[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    white-space: pre-line\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3B5cmlnaHQvY29weXJpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-copyright',
            templateUrl: './copyright.component.html',
            styleUrls: ['./copyright.component.css']
          }]
        }], function () {
          return [{
            type: _timetable_service__WEBPACK_IMPORTED_MODULE_1__["TimetableService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Hs9l":
    /*!**********************************************!*\
      !*** ./src/app/guards/auth-guard.service.ts ***!
      \**********************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function Hs9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../firebase.service */
      "k0Fy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(firebaseService, router) {
          _classCallCheck(this, AuthGuardService);

          this.firebaseService = firebaseService;
          this.router = router;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.firebaseService.isLoggedIn) {
              // If user is logged in, return true
              return true;
            } else {
              // Otherwise, route to login page
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JhD/":
    /*!**********************************************!*\
      !*** ./src/app/landing/landing.component.ts ***!
      \**********************************************/

    /*! exports provided: LandingComponent */

    /***/
    function JhD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingComponent;
      }();

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)();
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        decls: 3,
        vars: 0,
        consts: [[1, "about"], ["src", "../../assets/uwo.jpg"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Western's timetable application. This website allows you to view and search courses you are interested in taking, and save them to your own personalized schedule. Feel free to browse the course offerings for the 2020-2021 school year; however, to save schedules, you must create an account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
          }
        },
        styles: [".about[_ngcontent-%COMP%] {\n    color: black;\n    font-style: italic;\n    margin-bottom: 20px;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ko2Y":
    /*!********************************************************************!*\
      !*** ./src/app/public-course-list/public-course-list.component.ts ***!
      \********************************************************************/

    /*! exports provided: PublicCourseListComponent */

    /***/
    function Ko2Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicCourseListComponent", function () {
        return PublicCourseListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _timetable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../timetable.service */
      "0zDM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PublicCourseListComponent_li_4_div_9_div_6_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var y_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate8"](" ", y_r5.subject, " ", y_r5.course, " ", y_r5.courseInfo[0].component, " ", y_r5.courseInfo[0].section, ": ", y_r5.courseInfo[0].days, " ", y_r5.courseInfo[0].start, "-", y_r5.courseInfo[0].end, " ", y_r5.courseInfo[0].room, " ");
        }
      }

      function PublicCourseListComponent_li_4_div_9_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PublicCourseListComponent_li_4_div_9_div_6_li_2_Template, 2, 8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", x_r1.courses);
        }
      }

      function PublicCourseListComponent_li_4_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicCourseListComponent_li_4_div_9_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.expand(x_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Expand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicCourseListComponent_li_4_div_9_div_6_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", x_r1.desc, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Course IDs: ", x_r1.courseIDList, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r1.showDetails);
        }
      }

      function PublicCourseListComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicCourseListComponent_li_4_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var x_r1 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.viewDetails(x_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PublicCourseListComponent_li_4_div_9_Template, 7, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User: ", x_r1.user, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(Last Modified: ", x_r1.lastModified, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Schedule Name: ", x_r1.sName, " (", x_r1.num, " courses) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r1.show);
        }
      }

      var PublicCourseListComponent = /*#__PURE__*/function () {
        function PublicCourseListComponent(timetableService) {
          _classCallCheck(this, PublicCourseListComponent);

          this.timetableService = timetableService;
          this.courseLists = [];
        }

        _createClass(PublicCourseListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.timetableService.getPublicSchedules().subscribe(function (data) {
              data.forEach(function (e) {
                e.schedules.forEach(function (el) {
                  if (el.visibility == 'true') {
                    _this12.courseLists.push({
                      user: e.user,
                      lastModified: el.lastModified,
                      sName: el.scheduleName,
                      num: el.numCourses,
                      desc: el.description,
                      courseIDList: el.courseList.join(', '),
                      courses: el.courses
                    });
                  }
                });
              });

              _this12.courseLists.sort(function (a, b) {
                return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
              });
            });
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(x) {
            x.show = !x.show;
          }
        }, {
          key: "expand",
          value: function expand(x) {
            x.showDetails = !x.showDetails;
          }
        }]);

        return PublicCourseListComponent;
      }();

      PublicCourseListComponent.ɵfac = function PublicCourseListComponent_Factory(t) {
        return new (t || PublicCourseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_timetable_service__WEBPACK_IMPORTED_MODULE_1__["TimetableService"]));
      };

      PublicCourseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PublicCourseListComponent,
        selectors: [["app-public-course-list"]],
        decls: 6,
        vars: 5,
        consts: [[1, "public-course-list"], ["class", "main", 4, "ngFor", "ngForOf"], [1, "main"], [1, "bold"], [1, "italic"], [1, "details", 3, "click"], [4, "ngIf"], [1, "classDetail"], [4, "ngFor", "ngForOf"]],
        template: function PublicCourseListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Public Course List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PublicCourseListComponent_li_4_Template, 10, 5, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 1, ctx.courseLists, 0, 10));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
        styles: [".public-course-list[_ngcontent-%COMP%] {\n    border: 2px solid peachpuff;\n    border-radius: 5px;\n    background-color: rgba(255, 218, 185, 0.25);\n\tpadding: 10px 20px 10px 20px;\n\tmargin-bottom: 30px;\n}\n\n.main[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.italic[_ngcontent-%COMP%] {\n    font-weight: normal;\n    font-style: italic;\n}\n\n.details[_ngcontent-%COMP%] {\n\tbackground-color:#f9f9f9;\n\tborder-radius: 5px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#666666;\n\ttext-decoration:none;\n    text-shadow:0px 1px 0px #ffffff;\n    margin-left: 10px;\n}\n\n.details[_ngcontent-%COMP%]:hover {\n\tbackground-color:#e9e9e9;\n}\n\n.details[_ngcontent-%COMP%]:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n.classDetail[_ngcontent-%COMP%] {\n\tfont-size: 14px;\n\tmargin-bottom: 10px;\n\tmargin-top: 10px;\n\tfont-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljLWNvdXJzZS1saXN0L3B1YmxpYy1jb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7Q0FDOUMsNEJBQTRCO0NBQzVCLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGFBQWE7Q0FDYixvQkFBb0I7SUFDakIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFDQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMtY291cnNlLWxpc3QvcHVibGljLWNvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVibGljLWNvdXJzZS1saXN0IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwZWFjaHB1ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTgsIDE4NSwgMC4yNSk7XG5cdHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tYWluIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pdGFsaWMge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZGV0YWlscyB7XG5cdGJhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXI6MXB4IHNvbGlkICNkY2RjZGM7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0Y29sb3I6IzY2NjY2Njtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgdGV4dC1zaGFkb3c6MHB4IDFweCAwcHggI2ZmZmZmZjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5kZXRhaWxzOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xufVxuLmRldGFpbHM6YWN0aXZlIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHRvcDoxcHg7XG59IFxuXG4uY2xhc3NEZXRhaWwge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicCourseListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-public-course-list',
            templateUrl: './public-course-list.component.html',
            styleUrls: ['./public-course-list.component.css']
          }]
        }], function () {
          return [{
            type: _timetable_service__WEBPACK_IMPORTED_MODULE_1__["TimetableService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./firebase.service */
      "k0Fy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Draft My Schedule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_10_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.firebaseService.signout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var AppComponent = function AppComponent(firebaseService) {
        _classCallCheck(this, AppComponent);

        this.firebaseService = firebaseService;
        this.title = 'Western Timetable';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 16,
        vars: 7,
        consts: [["routerLink", "/", "routerLinkActive", "active-link", 3, "routerLinkActiveOptions"], ["routerLink", "/public", "routerLinkActive", "active-link"], ["routerLink", "/search", "routerLinkActive", "active-link"], ["routerLink", "/schedule", "routerLinkActive", "active-link", 4, "ngIf"], ["routerLink", "/admin", "routerLinkActive", "active-link", 4, "ngIf"], ["routerLink", "/login", "routerLinkActive", "active-link", 4, "ngIf"], ["routerLink", "/login", "routerLinkActive", "active-link", 3, "click", 4, "ngIf"], ["routerLink", "/copyright", 1, "footer"], ["routerLink", "/schedule", "routerLinkActive", "active-link"], ["routerLink", "/admin", "routerLinkActive", "active-link"], ["routerLink", "/login", "routerLinkActive", "active-link"], ["routerLink", "/login", "routerLinkActive", "active-link", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Public Course List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_a_8_Template, 2, 0, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_9_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_a_10_Template, 2, 0, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Copyright \xA9 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firebaseService.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firebaseService.isAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firebaseService.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firebaseService.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["h1[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n}\n\nnav[_ngcontent-%COMP%] {\n    overflow: hidden;\n    float: right;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: left;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n    color: black;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n    color: black\n}\n\n.footer[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    color: gray;\n    font-size: 10pt;\n    text-decoration: none;\n}\n\n.footer[_ngcontent-%COMP%]:hover {\n    color: blueviolet;\n    -webkit-text-decoration: underline blueviolet;\n            text-decoration: underline blueviolet;\n}\n\nnav[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%] {\n    color: blueviolet;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZDQUFxQztZQUFyQyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5uYXYge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5uYXYgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuICBcbm5hdiBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG5uYXYgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2tcbn1cblxuLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vdGVyOmhvdmVyIHtcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibHVldmlvbGV0O1xufVxuXG5uYXYgYS5hY3RpdmUtbGluayB7XG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TRGY":
    /*!******************************************!*\
      !*** ./src/app/admin/admin.component.ts ***!
      \******************************************/

    /*! exports provided: AdminComponent */

    /***/
    function TRGY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _timetable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../timetable.service */
      "0zDM");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../firebase.service */
      "k0Fy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AdminComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_li_5_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var user_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.adminAccess(user_r7.email, user_r7.access, user_r7.accountStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grant Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_li_5_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var user_r7 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.accountStatus(user_r7.email, user_r7.access, user_r7.accountStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deactivate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r7.user, " (", user_r7.email, ") ");
        }
      }

      function AdminComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_li_10_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var user_r11 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.adminAccess(user_r11.email, user_r11.access, user_r11.accountStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Revoke Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_li_10_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var user_r11 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.accountStatus(user_r11.email, user_r11.access, user_r11.accountStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deactivate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r11.user, " (", user_r11.email, ") ");
        }
      }

      function AdminComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_li_15_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var user_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.accountStatus(user_r15.email, user_r15.access, user_r15.accountStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reactivate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r15.user, " (", user_r15.email, ") ");
        }
      }

      function AdminComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_li_20_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var review_r18 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.toggleVisibility(review_r18.course, review_r18.text, review_r18.vis);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var review_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r18.vis == "hidden" ? "../../assets/invisible.svg" : "../../assets/visible.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r18.course, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r18.vis == "hidden" ? "Show" : "Hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r18.text, " ");
        }
      }

      function AdminComponent_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", o_r21.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r21.desc, " ");
        }
      }

      function AdminComponent_span_35_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r24 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r24);
        }
      }

      function AdminComponent_span_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_span_35_div_2_Template, 3, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_span_35_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.submitPolicy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.editForm.get("dataItems").controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.dmcaForm.controls.policy.touched);
        }
      }

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(timetableService, firebaseService, fb) {
          _classCallCheck(this, AdminComponent);

          this.timetableService = timetableService;
          this.firebaseService = firebaseService;
          this.fb = fb; // Global variables

          this.activeUsers = [];
          this.adminUsers = [];
          this.deactivatedUsers = [];
          this.reviews = [];
          this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dataItems: this.fb.array([])
          });
          this.dataItems = []; // Array to populate select options

          this.options = [{
            desc: 'Security and Privacy Policy'
          }, {
            desc: 'DMCA Notice and Takedown Policy'
          }, {
            desc: 'Acceptable Use Policy'
          }]; // Form input

          this.dmcaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            policy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                // Filter each user by type: active/deactivated, regular/admin and push to respective array
                _this13.timetableService.getPublicSchedules().subscribe(function (data) {
                  data.forEach(function (e) {
                    if (e.accountStatus == "active") {
                      if (e.access == "regular") {
                        _this13.activeUsers.push(e);
                      } else {
                        _this13.adminUsers.push(e);
                      }
                    } else {
                      _this13.deactivatedUsers.push(e);
                    }
                  });
                }); // Push reviews into array to display


                _this13.timetableService.getReviews().subscribe(function (data) {
                  data.forEach(function (e) {
                    e.reviews.forEach(function (p) {
                      _this13.reviews.push({
                        course: e.courseID,
                        vis: p.visibility,
                        text: p.review
                      });
                    });
                  });
                });
              }
            });
          }
        }, {
          key: "toggleVisibility",
          value: function toggleVisibility(courseID, reviewBody, vis) {
            var _this14 = this;

            // Toggle visibility
            if (vis == "hidden") vis = "public";else vis = "hidden";
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this14.timetableService.reviewVisibility(res, courseID, reviewBody, vis).subscribe(function (data) {
                  alert("Review visibility for ".concat(courseID, " was changed to ").concat(vis));
                  window.location.reload();
                });
              }
            });
          }
        }, {
          key: "adminAccess",
          value: function adminAccess(email, access, status) {
            var _this15 = this;

            // Toggle admin access
            if (access == "admin") access = "regular";else access = "admin";
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this15.timetableService.changeAccountSettings(res, email, access, status).subscribe(function (data) {
                  alert("Access priviledges for ".concat(email, " were changed to ").concat(access));
                  window.location.reload();
                });
              }
            });
          }
        }, {
          key: "accountStatus",
          value: function accountStatus(email, access, status) {
            var _this16 = this;

            // Toggle account status
            if (status == "active") status = "deactivated";else status = "active";
            this.firebaseService.getToken().then(function (res) {
              // Chekc if user is logged in
              if (res) {
                _this16.timetableService.changeAccountSettings(res, email, access, status).subscribe(function (data) {
                  alert("Account status for ".concat(email, " was changed to ").concat(status));
                  window.location.reload();
                });
              }
            });
          }
        }, {
          key: "submitPolicy",
          value: function submitPolicy() {
            var _this17 = this;

            // Extract input values
            var policy = this.dmcaForm.controls.policy.value;
            var text = this.editForm.controls.dataItems.value[0].text;
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this17.timetableService.updatePolicy(res, policy, text).subscribe(function (data) {
                  alert('Policy published!');
                  window.location.reload();
                });
              }
            });
          }
        }, {
          key: "editPolicy",
          value: function editPolicy(policy) {
            var _this18 = this;

            this.show = true;
            this.firebaseService.getToken().then(function (res) {
              // Check if user is logged in
              if (res) {
                _this18.timetableService.viewPolicy(res, policy).subscribe(function (data) {
                  // If there is existing policy 
                  if (data != 0) {
                    // Set data items to stored text
                    _this18.dataItems = [{
                      text: data[0].text
                    }];
                  } // If the policy does not exist in database
                  else {
                      _this18.dataItems = [{
                        text: ''
                      }];
                    } // Create new form group on editForm


                  _this18.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    dataItems: _this18.fb.array([])
                  }); // Add controls that assigns dataItems

                  _this18.editForm.setControl("dataItems", _this18.setExistingItems(_this18.dataItems));
                });
              }
            });
          } // Push values to formArray

        }, {
          key: "setExistingItems",
          value: function setExistingItems(items) {
            var _this19 = this;

            var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
            items.forEach(function (s) {
              formArray.push(_this19.fb.group({
                text: s.text
              }));
            });
            return formArray;
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_timetable_service__WEBPACK_IMPORTED_MODULE_2__["TimetableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 36,
        vars: 7,
        consts: [[1, "left"], [1, "user"], [4, "ngFor", "ngForOf"], [1, "admin"], [1, "deactivated"], [1, "review"], [1, "right"], [1, "dmca"], [3, "formGroup"], ["formControlName", "policy", 3, "change"], ["t", ""], ["disabled", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "details", 3, "click"], [1, "bold"], [3, "src"], [3, "value"], ["formArrayName", "dataItems", 4, "ngFor", "ngForOf"], [3, "disabled", "click"], ["formArrayName", "dataItems"], [3, "formGroupName"], ["formControlName", "text", "rows", "40", 1, "input-edit"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Active Users (Regular)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminComponent_li_5_Template, 6, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Active Users (Admin)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminComponent_li_10_Template, 6, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deactivated Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminComponent_li_15_Template, 4, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminComponent_li_20_Template, 8, 4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Site Copyright Enforcement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Policy:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminComponent_Template_select_change_28_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

              return ctx.editPolicy(_r4.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " -- Select an Option -- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AdminComponent_option_32_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdminComponent_span_35_Template, 5, 3, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activeUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adminUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deactivatedUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dmcaForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
        styles: [".user[_ngcontent-%COMP%] {\n    border: 2px solid goldenrod;\n    border-radius: 5px;\n    background-color: rgba(218, 165, 32, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n}\n\n.admin[_ngcontent-%COMP%] {\n    border: 2px solid tan;\n    border-radius: 5px;\n    background-color: rgba(210, 180, 140, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n}\n\n.deactivated[_ngcontent-%COMP%] {\n    border: 2px solid brown;\n    border-radius: 5px;\n    background-color: rgba(165, 42, 42, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n}\n\n.review[_ngcontent-%COMP%] {\n    border: 2px solid olive;\n    border-radius: 5px;\n    background-color: rgba(128, 128, 0, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px\n}\n\n.left[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 47%;\n    clear: both;\n}\n\n.right[_ngcontent-%COMP%] {\n    position: relative;\n    float: right;\n    width: 50%;\n}\n\n.details[_ngcontent-%COMP%] {\n\tbackground-color:#f9f9f9;\n\tborder-radius: 5px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#666666;\n\ttext-decoration:none;\n    text-shadow:0px 1px 0px #ffffff;\n}\n\n.details[_ngcontent-%COMP%]:hover {\n\tbackground-color:#e9e9e9;\n}\n\n.details[_ngcontent-%COMP%]:active {\n\tposition:relative;\n\ttop:1px;\n}\n\nli[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n.bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-right: 5px\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 15px;\n    height: auto;\n}\n\n.dmca[_ngcontent-%COMP%] {\n    border: 2px solid oldlace;\n    border-radius: 5px;\n    background-color: rgba(253, 245, 230, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n}\n\n.input-edit[_ngcontent-%COMP%] {\n    width:95%;\n    margin-bottom: 10px;\n    font-family: Arial, Helvetica, sans-serif\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLDRCQUE0QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGFBQWE7Q0FDYixvQkFBb0I7SUFDakIsK0JBQStCO0FBQ25DOztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87QUFDUjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkZW5yb2Q7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCAxNjUsIDMyLCAwLjI1KTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5hZG1pbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdGFuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMTgwLCAxNDAsIDAuMjUpO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmRlYWN0aXZhdGVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBicm93bjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC4yNSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5cbi5yZXZpZXcge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9saXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAwLCAwLjI1KTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHhcbn1cblxuLmxlZnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5kZXRhaWxzIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlcjoxcHggc29saWQgI2RjZGNkYztcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdGN1cnNvcjpwb2ludGVyO1xuXHRjb2xvcjojNjY2NjY2O1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB0ZXh0LXNoYWRvdzowcHggMXB4IDBweCAjZmZmZmZmO1xufVxuLmRldGFpbHM6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNlOWU5ZTk7XG59XG4uZGV0YWlsczphY3RpdmUge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0dG9wOjFweDtcbn0gXG5cbmxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmRtY2Ege1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9sZGxhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAyNDUsIDIzMCwgMC4yNSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaW5wdXQtZWRpdCB7XG4gICAgd2lkdGg6OTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
          }]
        }], function () {
          return [{
            type: _timetable_service__WEBPACK_IMPORTED_MODULE_2__["TimetableService"]
          }, {
            type: _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./subjects/subjects.component */
      "cfQR");
      /* harmony import */


      var _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./schedules/schedules.component */
      "/tPW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./firebase.service */
      "k0Fy");
      /* harmony import */


      var _public_course_list_public_course_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./public-course-list/public-course-list.component */
      "Ko2Y");
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./landing/landing.component */
      "JhD/");
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./admin/admin.component */
      "TRGY");
      /* harmony import */


      var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./copyright/copyright.component */
      "4COs");
      /* harmony import */


      var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./guards/auth-guard.service */
      "Hs9l");
      /* harmony import */


      var _guards_role_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./guards/role-guard.service */
      "k5xN");

      var config = {
        apiKey: "AIzaSyB72rXHZQusPEFcgpxSl6wMLzWTKxpAUqk",
        authDomain: "se3316-lab5-a1775.firebaseapp.com",
        databaseURL: "https://se3316-lab5-a1775.firebaseio.com",
        projectId: "se3316-lab5-a1775",
        storageBucket: "se3316-lab5-a1775.appspot.com",
        messagingSenderId: "386528497172",
        appId: "1:386528497172:web:49eac83ef0f13aa2e42101"
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_firebase_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseService"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(config), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
          path: '',
          component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"]
        }, {
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
        }, {
          path: 'public',
          component: _public_course_list_public_course_list_component__WEBPACK_IMPORTED_MODULE_12__["PublicCourseListComponent"]
        }, {
          path: 'search',
          component: _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_7__["SubjectsComponent"]
        }, {
          path: 'schedule',
          component: _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__["SchedulesComponent"],
          canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]]
        }, {
          path: 'admin',
          component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
          canActivate: [_guards_role_guard_service__WEBPACK_IMPORTED_MODULE_17__["RoleGuardService"]]
        }, {
          path: 'copyright',
          component: _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_15__["CopyrightComponent"]
        }]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_7__["SubjectsComponent"], _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__["SchedulesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _public_course_list_public_course_list_component__WEBPACK_IMPORTED_MODULE_12__["PublicCourseListComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"], _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_15__["CopyrightComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_7__["SubjectsComponent"], _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__["SchedulesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _public_course_list_public_course_list_component__WEBPACK_IMPORTED_MODULE_12__["PublicCourseListComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"], _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_15__["CopyrightComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(config), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
              path: '',
              component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"]
            }, {
              path: 'login',
              component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            }, {
              path: 'public',
              component: _public_course_list_public_course_list_component__WEBPACK_IMPORTED_MODULE_12__["PublicCourseListComponent"]
            }, {
              path: 'search',
              component: _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_7__["SubjectsComponent"]
            }, {
              path: 'schedule',
              component: _schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__["SchedulesComponent"],
              canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]]
            }, {
              path: 'admin',
              component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
              canActivate: [_guards_role_guard_service__WEBPACK_IMPORTED_MODULE_17__["RoleGuardService"]]
            }, {
              path: 'copyright',
              component: _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_15__["CopyrightComponent"]
            }]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
            providers: [_firebase_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseService"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cfQR":
    /*!************************************************!*\
      !*** ./src/app/subjects/subjects.component.ts ***!
      \************************************************/

    /*! exports provided: SubjectsComponent */

    /***/
    function cfQR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectsComponent", function () {
        return SubjectsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _timetable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../timetable.service */
      "0zDM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SubjectsComponent_div_15_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a subject. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SubjectsComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubjectsComponent_div_15_p_1_Template, 2, 0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.subjectsForm.controls.subject.errors == null ? null : ctx_r0.subjectsForm.controls.subject.errors.required);
        }
      }

      function SubjectsComponent_div_17_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var r_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User: ", r_r5.user, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(Posted: ", r_r5.timePosted, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Review: ", r_r5.review, " ");
        }
      }

      function SubjectsComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectsComponent_div_17_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.closeReviews();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubjectsComponent_div_17_li_3_Template, 7, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.reviews);
        }
      }

      function SubjectsComponent_li_18_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subject_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r8.fullDescription, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r8.importantInfo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r8.enrollment, " ");
        }
      }

      function SubjectsComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectsComponent_li_18_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var subject_r8 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.viewDetails(subject_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectsComponent_li_18_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var subject_r8 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.viewReviews(subject_r8.subject, subject_r8.courseCode);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SubjectsComponent_li_18_div_9_Template, 7, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subject_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", subject_r8.subject, " ", subject_r8.courseCode, " - ", subject_r8.description, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" ", subject_r8.component, " ", subject_r8.section, ": ", subject_r8.days, " ", subject_r8.start, "-", subject_r8.end, " ", subject_r8.room, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subject_r8.show);
        }
      }

      var SubjectsComponent = /*#__PURE__*/function () {
        function SubjectsComponent(timetableService) {
          _classCallCheck(this, SubjectsComponent);

          this.timetableService = timetableService; // Global variables

          this.timetableInfo = [];
          this.reviews = [];
          this.showReview = false; // Form input

          this.subjectsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            course: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
        }

        _createClass(SubjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Search the time table by subject, subject+course

        }, {
          key: "search",
          value: function search() {
            var _this20 = this;

            // Extract input values
            var s = this.subjectsForm.controls.subject.value.toUpperCase();
            var cs = this.subjectsForm.controls.course.value.toUpperCase();
            var key = this.subjectsForm.controls.keyword.value.toUpperCase();

            if (s == '' && cs == '' && key == '') {
              alert('Please enter values');
            } else if (s) {
              // Search by subject and optional course code component
              this.timetableService.getTimetableInfo(s, cs).subscribe(function (data) {
                return _this20.timetableInfo = data;
              });
            } else if (cs && !s) {
              // Search by course code only
              this.timetableService.getTimetableInfo(cs, '').subscribe(function (data) {
                return _this20.timetableInfo = data;
              });
            } else {
              // Search by keyword
              this.timetableService.getKeywordInfo(key).subscribe(function (data) {
                return _this20.timetableInfo = data;
              });
            }
          } // Toggle details view

        }, {
          key: "viewDetails",
          value: function viewDetails(subject) {
            subject.show = !subject.show;
          }
        }, {
          key: "viewReviews",
          value: function viewReviews(subject, course) {
            var _this21 = this;

            this.reviews = [];
            this.showReview = true;
            var cID = subject + ' ' + course;
            this.timetableService.getReviews().subscribe(function (data) {
              data.forEach(function (e) {
                if (e.courseID == cID) {
                  e.reviews.forEach(function (r) {
                    if (r.visibility == "public") _this21.reviews.push({
                      user: r.user,
                      timePosted: r.timePosted,
                      review: r.review
                    });
                  });
                }
              });
            });
            console.log(this.reviews);
          }
        }, {
          key: "closeReviews",
          value: function closeReviews() {
            this.showReview = false;
          }
        }]);

        return SubjectsComponent;
      }();

      SubjectsComponent.ɵfac = function SubjectsComponent_Factory(t) {
        return new (t || SubjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_timetable_service__WEBPACK_IMPORTED_MODULE_2__["TimetableService"]));
      };

      SubjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SubjectsComponent,
        selectors: [["app-subjects"]],
        decls: 19,
        vars: 5,
        consts: [[1, "subjects"], [3, "formGroup"], ["formControlName", "subject", "name", "subject", "type", "text"], ["formControlName", "course", "name", "course", "type", "text"], ["formControlName", "keyword", "name", "keyword", "type", "text"], [3, "disabled", "click"], [4, "ngIf"], ["class", "reviews", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "reviews"], [1, "close", 3, "click"], [1, "bold"], [1, "italic"], [1, "details", 3, "click"], [1, "classDetail"]],
        template: function SubjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subject:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Course Code:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Keyword:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubjectsComponent_Template_button_click_13_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SubjectsComponent_div_15_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SubjectsComponent_div_17_Template, 4, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SubjectsComponent_li_18_Template, 10, 10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.subjectsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.subjectsForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subjectsForm.invalid && (ctx.subjectsForm.dirty || ctx.subjectsForm.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReview);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timetableInfo);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".subjects[_ngcontent-%COMP%] {\n    border: 2px solid lightskyblue;\n    border-radius: 5px;\n    background-color: rgba(135, 206, 250, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px\n}\n\nli[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.details[_ngcontent-%COMP%] {\n\tbackground-color:#f9f9f9;\n\tborder-radius: 5px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#666666;\n\ttext-decoration:none;\n    text-shadow:0px 1px 0px #ffffff;\n    margin-left: 10px;\n}\n\n.details[_ngcontent-%COMP%]:hover {\n\tbackground-color:#e9e9e9;\n}\n\n.details[_ngcontent-%COMP%]:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n.classDetail[_ngcontent-%COMP%] {\n\tfont-size: 14px;\n\tmargin-bottom: 10px;\n\tmargin-top: 10px;\n}\n\n.reviews[_ngcontent-%COMP%] {\n\tborder: 2px dotted black;\n\tpadding: 10px 20px 10px 20px;\n\tmargin-bottom: 30px;\n}\n\n.italic[_ngcontent-%COMP%] {\n    font-weight: normal;\n    font-style: italic;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    background-color: gray;\n    border: none;\n    border-radius: 1px;\n\tcolor: white;\n\tfloat: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViamVjdHMvc3ViamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBQ2Isb0JBQW9CO0lBQ2pCLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsT0FBTztBQUNSOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsNEJBQTRCO0NBQzVCLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7Q0FDckIsWUFBWTtDQUNaLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViamVjdHMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDIwNiwgMjUwLCAwLjI1KTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHhcbn1cblxubGkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRldGFpbHMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyOjFweCBzb2xpZCAjZGNkY2RjO1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGNvbG9yOiM2NjY2NjY7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIHRleHQtc2hhZG93OjBweCAxcHggMHB4ICNmZmZmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGV0YWlsczpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6I2U5ZTllOTtcbn1cbi5kZXRhaWxzOmFjdGl2ZSB7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHR0b3A6MXB4O1xufSBcblxuLmNsYXNzRGV0YWlsIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmV2aWV3cyB7XG5cdGJvcmRlcjogMnB4IGRvdHRlZCBibGFjaztcblx0cGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLml0YWxpYyB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmJ1dHRvbi5jbG9zZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0ZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-subjects',
            templateUrl: './subjects.component.html',
            styleUrls: ['./subjects.component.css']
          }]
        }], function () {
          return [{
            type: _timetable_service__WEBPACK_IMPORTED_MODULE_2__["TimetableService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k0Fy":
    /*!*************************************!*\
      !*** ./src/app/firebase.service.ts ***!
      \*************************************/

    /*! exports provided: FirebaseService */

    /***/
    function k0Fy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
        return FirebaseService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _timetable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./timetable.service */
      "0zDM");

      var FirebaseService = /*#__PURE__*/function () {
        // Initialize constructor to check if user is logged in and is admin
        function FirebaseService(afAuth, router, timetableService) {
          _classCallCheck(this, FirebaseService);

          this.afAuth = afAuth;
          this.router = router;
          this.timetableService = timetableService; // Global variables

          this.isAdmin = false;
          this.isLoggedIn = false;
          this.isVerified = false;
          if (localStorage.getItem('user')) this.isLoggedIn = true;
          if (localStorage.getItem('admin')) this.isAdmin = true;
        } // Sign in


        _createClass(FirebaseService, [{
          key: "signin",
          value: function signin(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this22 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.afAuth.signInWithEmailAndPassword(email, password).then(function (res) {
                        // Add to local storage and set global variable to true
                        _this22.isLoggedIn = true;
                        alert('Login successful');
                        localStorage.setItem('user', JSON.stringify(res.user));

                        _this22.router.navigate(['/schedule']);
                      }, function (err) {
                        return alert(err.message);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Sign up

        }, {
          key: "signup",
          value: function signup(email, password) {
            var _this23 = this;

            return new Promise(function (resolve, reject) {
              _this23.afAuth.createUserWithEmailAndPassword(email, password).then(function (res) {
                resolve(res);
              }, function (err) {
                return alert(err.message);
              });
            });
          } // Third party login

        }, {
          key: "loginWithGoogle",
          value: function loginWithGoogle() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this24 = this;

              var provider;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider();
                      provider.addScope('profile');
                      provider.addScope('email');
                      _context2.next = 5;
                      return this.afAuth.signInWithPopup(provider).then(function (res) {
                        _this24.isLoggedIn = true;
                        localStorage.setItem('user', JSON.stringify(res.user));
                      }, function (err) {
                        return alert(err);
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Sign out

        }, {
          key: "signout",
          value: function signout() {
            var _this25 = this;

            this.afAuth.signOut().then(function (res) {
              // Clear local storage and set global variable to false
              _this25.isLoggedIn = false;
              localStorage.removeItem('user');
              localStorage.removeItem('admin');
              alert('Successfully signed out!');
              window.location.reload();
            })["catch"](function (err) {
              return console.log(err);
            });
          } // Check if user is logged in through getting token

        }, {
          key: "getToken",
          value: function getToken() {
            var _this26 = this;

            return new Promise(function (res, rej) {
              _this26.afAuth.onAuthStateChanged(function (user) {
                if (user) {
                  // User exists
                  user.getIdToken(true).then(function (id) {
                    res(id);
                  }, function (err) {
                    return rej(err);
                  });
                } else {
                  // No user
                  console.log('No user logged in');
                }
              });
            });
          }
        }, {
          key: "verifyLogin",
          value: function verifyLogin(email, pwd) {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(email, pwd).then(function (res) {
                var user = res.user;
                _this27.isVerified = user.emailVerified;

                if (!_this27.isVerified) {
                  if (confirm('Email has not been verified. Click OK to send another email')) {
                    _this27.afAuth.onAuthStateChanged(function (e) {
                      e.sendEmailVerification().then(function () {
                        alert("Verification email re-sent");
                        window.location.reload();
                      })["catch"](function (err) {
                        return alert('Sending email failed');
                      });
                    });
                  }
                } else {
                  localStorage.setItem('user', JSON.stringify(user));
                  _this27.isLoggedIn = true;

                  _this27.signin(email, pwd);
                }
              }, function (err) {
                return alert(err);
              });
            });
          } // Update password through firebase function

        }, {
          key: "updatePassword",
          value: function updatePassword(pwd) {
            return new Promise(function (res, rej) {
              var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
              user.updatePassword(pwd).then(function (e) {
                alert('Password has been updated');
                window.location.reload();
              })["catch"](function (err) {
                console.log(err);
              });
            });
          } // 

        }, {
          key: "changePassword",
          value: function changePassword(oldPwd, newPwd) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var user;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
                      _context3.prev = 1;
                      _context3.next = 4;
                      return this.reauthenticate(oldPwd);

                    case 4:
                      _context3.next = 6;
                      return this.updatePassword(newPwd);

                    case 6:
                      _context3.next = 11;
                      break;

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3["catch"](1);
                      alert('Current password invalid');

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[1, 8]]);
            }));
          } // Check if user is logged in / has logged in recently

        }, {
          key: "reauthenticate",
          value: function reauthenticate(currentPwd) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
            var cred = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.EmailAuthProvider.credential(user.email, currentPwd);
            return user.reauthenticateWithCredential(cred);
          }
        }, {
          key: "handleError",
          value: function handleError(result) {
            return function (error) {
              // Display error in alert
              alert(error.error); // Let the app keep running by returning an empty result.

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
            };
          }
        }]);

        return FirebaseService;
      }();

      FirebaseService.ɵfac = function FirebaseService_Factory(t) {
        return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_timetable_service__WEBPACK_IMPORTED_MODULE_6__["TimetableService"]));
      };

      FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FirebaseService,
        factory: FirebaseService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _timetable_service__WEBPACK_IMPORTED_MODULE_6__["TimetableService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k5xN":
    /*!**********************************************!*\
      !*** ./src/app/guards/role-guard.service.ts ***!
      \**********************************************/

    /*! exports provided: RoleGuardService */

    /***/
    function k5xN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleGuardService", function () {
        return RoleGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../firebase.service */
      "k0Fy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RoleGuardService = /*#__PURE__*/function () {
        function RoleGuardService(firebaseService, router) {
          _classCallCheck(this, RoleGuardService);

          this.firebaseService = firebaseService;
          this.router = router;
        }

        _createClass(RoleGuardService, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.firebaseService.isAdmin) {
              // If user is admin, return true
              return true;
            } else {
              // Otherwise, reroute to schedule page
              this.router.navigate(['/schedule']);
              return false;
            }
          }
        }]);

        return RoleGuardService;
      }();

      RoleGuardService.ɵfac = function RoleGuardService_Factory(t) {
        return new (t || RoleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      RoleGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleGuardService,
        factory: RoleGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../firebase.service */
      "k0Fy");
      /* harmony import */


      var _timetable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../timetable.service */
      "0zDM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(firebaseService, timetableService, router) {
          _classCallCheck(this, LoginComponent);

          this.firebaseService = firebaseService;
          this.timetableService = timetableService;
          this.router = router; // Global variable

          this.show = false; // Form input

          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signUp",
          value: function signUp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var n, e, pwd;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      // Extract input values
                      n = this.loginForm.controls.name.value;
                      e = this.loginForm.controls.email.value;
                      pwd = this.loginForm.controls.password.value;

                      if (n == '') {
                        alert('Please enter a name');
                      } else {
                        this.trySignUp(n, e, pwd);
                      }

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var em, pwd;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      // Extract input values
                      em = this.loginForm.controls.email.value;
                      pwd = this.loginForm.controls.password.value;
                      _context5.next = 4;
                      return this.timetableService.getPublicSchedules().subscribe(function (data) {
                        data.forEach(function (e) {
                          // Do not allow deactivated users to log in
                          if (em == e.email && e.accountStatus == "deactivated") {
                            alert('Your account has been deactivated. Please contact admin@gmail.com to resolve this issue.');
                            window.location.reload();
                          }
                        });
                      });

                    case 4:
                      _context5.next = 6;
                      return this.firebaseService.verifyLogin(em, pwd);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // Toggle login view UI

        }, {
          key: "toggleLogin",
          value: function toggleLogin() {
            this.show = !this.show;
          }
        }, {
          key: "googleLogin",
          value: function googleLogin() {
            var _this28 = this;

            this.firebaseService.loginWithGoogle().then(function (res) {
              _this28.timetableService.register('Jenny', 'lijenny1999@gmail.com').subscribe(); // Redirect to schedule page


              _this28.router.navigate(['/schedule']);
            });
          }
        }, {
          key: "trySignUp",
          value: function trySignUp(name, email, password) {
            var _this29 = this;

            this.firebaseService.signup(email, password).then(function (res) {
              _this29.timetableService.register(name, email).subscribe();

              var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
              user.sendEmailVerification().then(function (e) {
                alert('Verification email sent');
                window.location.reload();
              })["catch"](function (err) {
                return alert(err);
              });
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_timetable_service__WEBPACK_IMPORTED_MODULE_5__["TimetableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 20,
        vars: 8,
        consts: [[1, "login"], [3, "formGroup"], [4, "ngIf"], ["formControlName", "email", "name", "email", "type", "text"], ["formControlName", "password", "name", "password", "type", "password"], [3, "disabled", "click"], [3, "click"], [1, "loginBtn", 3, "click"], ["src", "../assets/google.png"], ["formControlName", "name", "name", "name", "type", "text"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginComponent_span_4_Template, 4, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() {
              return ctx.show ? ctx.signUp() : ctx.signIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_15_listener() {
              return ctx.toggleLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
              return ctx.googleLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.show ? "Sign Up" : "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.show ? "Sign Up" : "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.show ? "Already have an account? " : "Do not have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.show ? "Sign In" : "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.show ? "Sign Up" : "Sign In", " with ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: [".login[_ngcontent-%COMP%] {\n    border: 2px solid lavender;\n    border-radius: 5px;\n    background-color: rgba(230, 230, 250, 0.25);\n    padding: 10px 20px 10px 20px;\n    margin-bottom: 30px;\n    text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: underline;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: royalblue;\n    cursor: pointer;\n}\n\n.loginBtn[_ngcontent-%COMP%] {\n    background-color: white;\n    border: grey solid 1px;\n    color: black;\n    font-weight: bold;\n    padding: 10px 24px;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 14px;\n    margin: 4px 2px 20px 2px;\n    cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 15px;\n    height: auto;\n    margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGF2ZW5kZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMzAsIDI1MCwgMC4yNSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogcm95YWxibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4IDIwcHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
          }, {
            type: _timetable_service__WEBPACK_IMPORTED_MODULE_5__["TimetableService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map