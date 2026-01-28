<template>
  <div class="py-10" :style="{ backgroundColor: bgColor }">
    <div
      class="container d-md-flex align-items-center"
      :id="success ? 'newsletterSuccess' : ''"
      :style="{ height: heightFixed }"
      ref="modalContent"
    >
      <div class="col-md-8">
        <headline level="h2" :class="headlineClasses">{{ currentHeadline }} </headline>
        <p>{{ currentText }}</p>
        <formular
          v-if="!success"
          v-bind="formularConfig"
          ref="form"
          :onSuccess="handleSuccess"
          :class="formularClasses"
        />
      </div>
      <div class="col" :class="isMobile ? 'w-60 mx-auto pt-5' : ''">
        <icon
          ref="iconHeart"
          class="iconHeart position-absolute"
          :class="[heartAnimationClass, isMobile ? iconHeartMobileClass : '']"
          icon="heart"
          color="var(--color-red)"
          :strokeColor="contrastColor"
          :size="isMobile ? 200 : 380"
          style="opacity: 0"
          :style="isMobile ? { display: iconHeartDisplay } : {}"
          aria-label="Success heart icon"
        />
        <lottie-player
          :animationData="lottieAnimation"
          aria-label="Origami bird animation"
          class="iconBird"
          :class="[birdAnimationClass]"
          ref="iconBird"
          :loop="true"
          :autoplay="true"
          :onLoopComplete="setIdle"
          :speed="lottieSpeed"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tools from '../utils/tools';
const SCREEN_XS_THRESHOLD = 750;
const LOTTIE_SIZE_MOBILE = 170;
const LOTTIE_SIZE_DESKTOP = 220;
const LOTTIE_SPEED_SUCCESS = 40;
const LOTTIE_SPEED_NORMAL = 1;
export default {
  tagName: 'newsletter-section',
  props: {
    bgColor: {
      type: String,
    },
    headline: {
      type: String,
    },
    text: {
      type: String,
    },
    formular: {
      type: Object,
    },
    lottie: {
      type: Object,
    },
    iconColor: {
      type: String,
      default: 'var(--color-orange)',
    },
    confirmation: {
      type: Object,
      default: null,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    lottieAnimation() {
      return this.idle ? this.lottieFiles?.idle : this.lottieFiles?.fly;
    },
    formularConfig() {
      if (!this.isMobile) return this.formular;
      return {
        ...this.formular,
        form: { ...this.formular.form, ctaPosition: 'justify-content-start' },
      };
    },
    contrastColor() {
      return this.light ? 'var(--color-white)' : 'var(--color-black)';
    },
    currentHeadline() {
      return this.success ? this.confirmation?.headline : this.headline;
    },
    currentText() {
      return this.success ? this.confirmation?.text : this.text;
    },
    contentClasses() {
      return [this.isMobile ? 'my-md-4' : 'my-6 col-10', this.success ? 'd-flex align-items-center' : ''];
    },
    headlineClasses() {
      return [this.isMobile ? '' : 'mb-5', this.success ? 'mb-5' : 'mb-2'];
    },
    formularClasses() {
      return this.isMobile ? 'mt-n5 d-flex justify-content-center align-items-center' : '';
    },
    containerClasses() {
      return this.isMobile ? 'flex-column justify-content-between p-2' : 'align-items-center container';
    },
    lottieAnimation() {
      return this.idle ? this.lottieFiles?.idle : this.lottieFiles?.fly;
    },
    lottieSpeed() {
      return this.success ? LOTTIE_SPEED_SUCCESS : LOTTIE_SPEED_NORMAL;
    },
    lottieSize() {
      return this.screenXS ? LOTTIE_SIZE_MOBILE : LOTTIE_SIZE_DESKTOP;
    },
    iconHeartDisplay() {
      return this.success ? '' : 'none';
    },
    birdAnimationClass() {
      return this.success ? 'fade-out-animation' : '';
    },
    heartAnimationClass() {
      return this.success ? 'fade-in-animation' : '';
    },
    iconHeartMobileClass() {
      return this.screenXS ? '' : 'mb-11';
    },
  },
  data() {
    return {
      success: false,
      idle: true,
      screenXS: false,
      heightFixed: 'auto',
      isMobile: Tools.isBelowBreakpoint('lg'),
      lottieFiles: null,
      birdieFlap: {
        nm: 'Main Scene',
        h: 2000,
        w: 2000,
        meta: {
          g: '@lottiefiles/creator 1.60.0',
        },
        layers: [
          {
            ty: 0,
            nm: 'ManyFlaps',
            sr: 1,
            st: 0,
            op: 270,
            ip: 0,
            ln: '155',
            hasMask: false,
            ao: 0,
            ks: {
              a: {
                a: 0,
                k: [1000, 1000],
              },
              s: {
                a: 0,
                k: [-100, 100],
              },
              sk: {
                a: 0,
                k: 0,
              },
              p: {
                a: 1,
                k: [
                  {
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    s: [1020, 1020],
                    t: 0,
                  },
                  {
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    s: [980, 1080, 0],
                    t: 134.999,
                  },
                  {
                    s: [1020, 1020, 0],
                    t: 269.998,
                  },
                ],
              },
              r: {
                a: 0,
                k: 0,
              },
              sa: {
                a: 0,
                k: 0,
              },
              o: {
                a: 0,
                k: 100,
              },
            },
            w: 2000,
            h: 2000,
            refId: '1_845dd7c6-395f-434c-bbfd-167cffef374b',
            ind: 1,
          },
        ],
        v: '5.7.0',
        fr: 60,
        op: 270,
        ip: 0,
        assets: [
          {
            nm: 'ManyFlaps',
            id: '1_845dd7c6-395f-434c-bbfd-167cffef374b',
            layers: [
              {
                ty: 0,
                nm: 'Flap',
                sr: 1,
                st: 180,
                op: 270,
                ip: 180,
                ln: '185',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 940, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                w: 2000,
                h: 2000,
                refId: '2_e374e8de-a82d-4645-9814-80337e5dae8e',
                ind: 1,
              },
              {
                ty: 0,
                nm: 'Flap',
                sr: 1,
                st: 90,
                op: 180,
                ip: 90,
                ln: '110',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 940, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                w: 2000,
                h: 2000,
                refId: '2_e374e8de-a82d-4645-9814-80337e5dae8e',
                ind: 2,
              },
              {
                ty: 0,
                nm: 'Flap',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '76',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 940, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                w: 2000,
                h: 2000,
                refId: '2_e374e8de-a82d-4645-9814-80337e5dae8e',
                ind: 3,
              },
            ],
          },
          {
            nm: 'Flap',
            id: '2_e374e8de-a82d-4645-9814-80337e5dae8e',
            layers: [
              {
                ty: 4,
                nm: 'Formebene 2',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '31',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [0, 0],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Form 1',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 1,
                          k: [
                            {
                              o: {
                                x: 0.333,
                                y: 0,
                              },
                              i: {
                                x: 0.667,
                                y: 1,
                              },
                              s: [
                                {
                                  c: false,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  v: [
                                    [380, -508],
                                    [860, -776],
                                    [394, 424],
                                  ],
                                },
                              ],
                              t: 0,
                            },
                            {
                              o: {
                                x: 0.333,
                                y: 0,
                              },
                              i: {
                                x: 0.667,
                                y: 1,
                              },
                              s: [
                                {
                                  c: false,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  v: [
                                    [380, -299.944],
                                    [860, -263.864],
                                    [394, 424],
                                  ],
                                },
                              ],
                              t: 45,
                            },
                            {
                              s: [
                                {
                                  c: false,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  v: [
                                    [380, -508],
                                    [860, -776],
                                    [394, 424],
                                  ],
                                },
                              ],
                              t: 89.999,
                            },
                          ],
                        },
                      },
                      {
                        ty: 'rd',
                        nm: 'Runde Ecken 1',
                        r: {
                          a: 0,
                          k: 80,
                        },
                      },
                      {
                        id: 'contour',
                        ty: 'st',
                        nm: 'Kontur 1',
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        o: {
                          a: 0,
                          k: 100,
                        },
                        w: {
                          a: 0,
                          k: 26,
                        },
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100.369, 99.973],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [0.02, 0.023],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 1,
              },
              {
                ty: 4,
                nm: 'Formebene 1',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '30',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [0, 0],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1008, 1002, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Form 1',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 1,
                          k: [
                            {
                              o: {
                                x: 0.333,
                                y: 0,
                              },
                              i: {
                                x: 0.667,
                                y: 1,
                              },
                              s: [
                                {
                                  c: false,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  v: [
                                    [-176, -380],
                                    [368, -932],
                                    [372, 404],
                                  ],
                                },
                              ],
                              t: 0,
                            },
                            {
                              o: {
                                x: 0.333,
                                y: 0,
                              },
                              i: {
                                x: 0.667,
                                y: 1,
                              },
                              s: [
                                {
                                  c: false,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  v: [
                                    [-176, -380],
                                    [368, -360],
                                    [372, 404],
                                  ],
                                },
                              ],
                              t: 45,
                            },
                            {
                              s: [
                                {
                                  c: false,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                  ],
                                  v: [
                                    [-176, -380],
                                    [368, -932],
                                    [372, 404],
                                  ],
                                },
                              ],
                              t: 89.999,
                            },
                          ],
                        },
                      },
                      {
                        ty: 'rd',
                        nm: 'Runde Ecken 1',
                        r: {
                          a: 0,
                          k: 80,
                        },
                      },
                      {
                        id: 'contour',
                        ty: 'st',
                        nm: 'Kontur 1',
                        lc: 2,
                        lj: 2,
                        ml: 4,
                        o: {
                          a: 0,
                          k: 100,
                        },
                        w: {
                          a: 0,
                          k: 26,
                        },
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 2,
              },
              {
                ty: 4,
                nm: 'bird-wings-up-outline',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '29',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [223.5, 225, 0],
                  },
                  s: {
                    a: 0,
                    k: [400, 400, 80],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [960, 960, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Gruppe 3',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [1.469, -0.768],
                              [-0.768, -1.469],
                            ],
                            o: [
                              [-0.768, -1.468],
                              [-1.468, 0.767],
                              [0, 0],
                            ],
                            v: [
                              [-161.21, -154.405],
                              [-165.259, -155.674],
                              [-166.528, -151.626],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 2',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [-0.672, -0.265],
                            ],
                            o: [
                              [0, 0],
                              [0.334, 0.64],
                              [0, 0],
                            ],
                            v: [
                              [-45.638, 73.259],
                              [-48.297, 74.648],
                              [-46.738, 76.05],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 3',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [153.817, 151.863],
                              [152.717, 154.654],
                              [152.726, 154.657],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 4',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [160.872, 142.936],
                              [163.335, 141.224],
                              [163.332, 141.219],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 5',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [1.249, -0.393],
                              [0, -1.31],
                            ],
                            o: [
                              [0, 0],
                              [-0.75, -1.074],
                              [-1.25, 0.393],
                              [0, 0],
                            ],
                            v: [
                              [-45.638, -152.917],
                              [-43.178, -154.634],
                              [-46.538, -155.779],
                              [-48.638, -152.917],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 6',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-166.528, -151.626],
                              [-48.297, 74.648],
                              [-42.979, 71.869],
                              [-161.21, -154.405],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 7',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-46.738, 76.05],
                              [152.717, 154.654],
                              [154.917, 149.072],
                              [-44.538, 70.468],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 8',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [-2.1, -0.059],
                              [-1.488, 1.872],
                              [0.53, 1.981],
                              [1.652, 2.376],
                              [0, 0],
                              [-0.293, -1.095],
                              [-0.213, 0.268],
                              [1.194, 0.033],
                              [2.357, 0.921],
                            ],
                            o: [
                              [2.687, 1.05],
                              [2.045, 0.057],
                              [1.492, -1.876],
                              [-0.543, -2.031],
                              [0, 0],
                              [1.451, 2.087],
                              [0.306, 1.145],
                              [0.209, -0.263],
                              [-1.138, -0.032],
                              [0, 0],
                            ],
                            v: [
                              [152.726, 154.657],
                              [159.965, 156.385],
                              [165.804, 154.091],
                              [166.705, 147.876],
                              [163.335, 141.224],
                              [158.409, 144.649],
                              [160.909, 149.426],
                              [161.107, 150.358],
                              [160.132, 150.387],
                              [154.909, 149.068],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 9',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [163.332, 141.219],
                              [-43.178, -154.634],
                              [-48.098, -151.2],
                              [158.412, 144.653],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 10',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-48.638, -152.917],
                              [-48.638, 73.259],
                              [-42.638, 73.259],
                              [-42.638, -152.917],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'mm',
                        nm: 'Pfade zusammenführen 1',
                        mm: 1,
                      },
                      {
                        id: 'contour',
                        ty: 'fl',
                        nm: 'Fläche 1',
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                        r: 1,
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [236.175, 293.287],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                  {
                    ty: 'gr',
                    nm: 'Gruppe 4',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 1.656],
                              [1.656, 0],
                            ],
                            o: [
                              [1.656, 0],
                              [0, -1.657],
                              [0, 0],
                            ],
                            v: [
                              [17.384, 42.46],
                              [20.384, 39.46],
                              [17.384, 36.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 2',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-88.748, 25.508],
                              [-86.627, 27.63],
                              [-86.626, 27.628],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 3',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0.563, -0.563],
                            ],
                            o: [
                              [0, 0],
                              [-0.797, 0],
                              [0, 0],
                            ],
                            v: [
                              [-23.859, -39.46],
                              [-23.859, -42.46],
                              [-25.982, -41.58],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 4',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 1.657],
                              [1.656, 0],
                            ],
                            o: [
                              [1.656, 0],
                              [0, -1.656],
                              [0, 0],
                            ],
                            v: [
                              [94.372, -36.46],
                              [97.372, -39.46],
                              [94.372, -42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 5',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [17.384, 36.46],
                              [-82.975, 36.46],
                              [-82.975, 42.46],
                              [17.384, 42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 6',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0.294, 0.711],
                              [-3.679, 3.678],
                              [0, 0],
                              [-1.8, -4.348],
                              [-5.637, 0],
                            ],
                            o: [
                              [-5.2, 0],
                              [-0.295, -0.711],
                              [0, 0],
                              [-3.987, 3.987],
                              [1.799, 4.348],
                              [0, 0],
                            ],
                            v: [
                              [-82.975, 36.46],
                              [-90.028, 34.211],
                              [-86.627, 27.63],
                              [-90.87, 23.387],
                              [-95.572, 36.506],
                              [-82.975, 42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 7',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-86.626, 27.628],
                              [-21.737, -37.34],
                              [-25.982, -41.58],
                              [-90.871, 23.388],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 8',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-23.859, -36.46],
                              [94.372, -36.46],
                              [94.372, -42.46],
                              [-23.859, -42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'mm',
                        nm: 'Pfade zusammenführen 1',
                        mm: 1,
                      },
                      {
                        id: 'contour',
                        ty: 'fl',
                        nm: 'Fläche 1',
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                        r: 1,
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [96.164, 179.731],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 3,
              },
              {
                ty: 4,
                nm: 'bird-wings-up-color',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '28',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [221, 220.5, 0],
                  },
                  s: {
                    a: 0,
                    k: [400, 400, 400],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1040, 1040, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Gruppe 1',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 1,
                          k: [
                            {
                              o: {
                                x: 0.333,
                                y: 0,
                              },
                              i: {
                                x: 0.667,
                                y: 1,
                              },
                              s: [
                                {
                                  c: true,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [-11.807, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [5.904, 9.839],
                                    [0, 0],
                                    [0, 0],
                                    [4.878, -2.774],
                                    [0, 0],
                                    [0, 0],
                                    [3.745, -3.7],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [-7.871, 7.871],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [9.839, 3.935],
                                    [0, 0],
                                    [0, 0],
                                    [1.97, -5.254],
                                    [0, 0],
                                    [0, 0],
                                    [-0.115, -5.263],
                                    [0, 0],
                                  ],
                                  v: [
                                    [-29.364, -90.601],
                                    [-147.432, -90.601],
                                    [-212.369, -25.664],
                                    [-206.466, -11.889],
                                    [-106.108, -11.889],
                                    [-29.364, 135.696],
                                    [169.384, 214.408],
                                    [177.255, 204.569],
                                    [112.318, 112.082],
                                    [218.27, -170.419],
                                    [209.685, -177.741],
                                    [108.382, -120.118],
                                    [106.393, -210.507],
                                    [96.178, -214.643],
                                  ],
                                },
                              ],
                              t: 0,
                            },
                            {
                              o: {
                                x: 0.333,
                                y: 0,
                              },
                              i: {
                                x: 0.667,
                                y: 1,
                              },
                              s: [
                                {
                                  c: true,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [-11.807, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [5.904, 9.839],
                                    [0, 0],
                                    [0, 0],
                                    [4.878, -2.774],
                                    [0, 0],
                                    [0, 0],
                                    [3.745, -3.7],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [-7.871, 7.871],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [9.839, 3.935],
                                    [0, 0],
                                    [0, 0],
                                    [1.971, -5.254],
                                    [0, 0],
                                    [0, 0],
                                    [-0.115, -5.263],
                                    [0, 0],
                                  ],
                                  v: [
                                    [-29.364, -90.601],
                                    [-147.432, -90.601],
                                    [-212.369, -25.664],
                                    [-206.466, -11.889],
                                    [-106.108, -11.889],
                                    [-29.364, 135.696],
                                    [169.384, 214.408],
                                    [177.255, 204.569],
                                    [112.318, 112.082],
                                    [218.895, -56.419],
                                    [210.311, -63.741],
                                    [108.12, -69.118],
                                    [106.571, -83.507],
                                    [96.356, -87.643],
                                  ],
                                },
                              ],
                              t: 45,
                            },
                            {
                              s: [
                                {
                                  c: true,
                                  i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [-11.807, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [5.904, 9.839],
                                    [0, 0],
                                    [0, 0],
                                    [4.878, -2.774],
                                    [0, 0],
                                    [0, 0],
                                    [3.745, -3.7],
                                  ],
                                  o: [
                                    [0, 0],
                                    [0, 0],
                                    [-7.871, 7.871],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [9.839, 3.935],
                                    [0, 0],
                                    [0, 0],
                                    [1.97, -5.254],
                                    [0, 0],
                                    [0, 0],
                                    [-0.115, -5.263],
                                    [0, 0],
                                  ],
                                  v: [
                                    [-29.364, -90.601],
                                    [-147.432, -90.601],
                                    [-212.369, -25.664],
                                    [-206.466, -11.889],
                                    [-106.108, -11.889],
                                    [-29.364, 135.696],
                                    [169.384, 214.408],
                                    [177.255, 204.569],
                                    [112.318, 112.082],
                                    [218.27, -170.419],
                                    [209.685, -177.741],
                                    [108.382, -120.118],
                                    [106.393, -210.507],
                                    [96.178, -214.643],
                                  ],
                                },
                              ],
                              t: 89.999,
                            },
                          ],
                        },
                      },
                      {
                        ty: 'fl',
                        nm: 'Fläche 1',
                        c: {
                          a: 0,
                          k: [0.973, 0.518, 0.173],
                        },
                        r: 1,
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [217.092, 224.434],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 4,
              },
            ],
          },
        ],
      },
      birdieNoflap: {
        nm: 'Main Scene',
        h: 2000,
        w: 2000,
        meta: {
          g: '@lottiefiles/creator 1.60.0',
        },
        layers: [
          {
            ty: 0,
            nm: 'NoFlaps',
            sr: 1,
            st: 0,
            op: 270,
            ip: 0,
            ln: '183',
            hasMask: false,
            ao: 0,
            ks: {
              a: {
                a: 0,
                k: [1000, 1000],
              },
              s: {
                a: 0,
                k: [-100, 100],
              },
              sk: {
                a: 0,
                k: 0,
              },
              p: {
                a: 1,
                k: [
                  {
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    s: [1020, 1020],
                    t: 0,
                  },
                  {
                    o: {
                      x: 0.333,
                      y: 0,
                    },
                    i: {
                      x: 0.667,
                      y: 1,
                    },
                    s: [980, 1080, 0],
                    t: 134.999,
                  },
                  {
                    s: [1020, 1020, 0],
                    t: 269.998,
                  },
                ],
              },
              r: {
                a: 0,
                k: 0,
              },
              sa: {
                a: 0,
                k: 0,
              },
              o: {
                a: 0,
                k: 100,
              },
            },
            w: 2000,
            h: 2000,
            refId: '1_ca685ed4-a011-40ef-bac5-f6a3b2a46084',
            ind: 1,
          },
        ],
        v: '5.7.0',
        fr: 60,
        op: 270,
        ip: 0,
        assets: [
          {
            nm: 'NoFlaps',
            id: '1_ca685ed4-a011-40ef-bac5-f6a3b2a46084',
            layers: [
              {
                ty: 0,
                nm: 'FlapStill',
                sr: 1,
                st: 180,
                op: 450,
                ip: 180,
                ln: '182',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 940, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                w: 2000,
                h: 2000,
                refId: '2_0ac36b62-6649-4937-bf63-e2446bedd9da',
                ind: 1,
              },
              {
                ty: 0,
                nm: 'FlapStill',
                sr: 1,
                st: 90,
                op: 360,
                ip: 90,
                ln: '181',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 940, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                w: 2000,
                h: 2000,
                refId: '2_0ac36b62-6649-4937-bf63-e2446bedd9da',
                ind: 2,
              },
              {
                ty: 0,
                nm: 'FlapStill',
                sr: 1,
                st: 0,
                op: 270,
                ip: 0,
                ln: '170',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 940, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                w: 2000,
                h: 2000,
                refId: '2_0ac36b62-6649-4937-bf63-e2446bedd9da',
                ind: 3,
              },
            ],
          },
          {
            nm: 'FlapStill',
            id: '2_0ac36b62-6649-4937-bf63-e2446bedd9da',
            layers: [
              {
                ty: 4,
                nm: 'Formebene 2',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '128',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [0, 0],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1000, 1000],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Form 1',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: false,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [380, -508],
                              [860, -776],
                              [394, 424],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'rd',
                        nm: 'Runde Ecken 1',
                        r: {
                          a: 0,
                          k: 80,
                        },
                      },
                      {
                        id: 'contour',
                        ty: 'st',
                        nm: 'Kontur 1',
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        o: {
                          a: 0,
                          k: 100,
                        },
                        w: {
                          a: 0,
                          k: 26,
                        },
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100.369, 99.973],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [0.02, 0.023],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 1,
              },
              {
                ty: 4,
                nm: 'Formebene 1',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '127',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [0, 0],
                  },
                  s: {
                    a: 0,
                    k: [100, 100],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1008, 1002, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Form 1',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: false,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-176, -380],
                              [368, -932],
                              [372, 404],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'rd',
                        nm: 'Runde Ecken 1',
                        r: {
                          a: 0,
                          k: 80,
                        },
                      },
                      {
                        id: 'contour',
                        ty: 'st',
                        nm: 'Kontur 1',
                        lc: 2,
                        lj: 2,
                        ml: 4,
                        o: {
                          a: 0,
                          k: 100,
                        },
                        w: {
                          a: 0,
                          k: 26,
                        },
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 2,
              },
              {
                ty: 4,
                nm: 'bird-wings-up-outline',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '126',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [223.5, 225, 0],
                  },
                  s: {
                    a: 0,
                    k: [400, 400, 80],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [960, 960, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Gruppe 3',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [1.469, -0.768],
                              [-0.768, -1.469],
                            ],
                            o: [
                              [-0.768, -1.468],
                              [-1.468, 0.767],
                              [0, 0],
                            ],
                            v: [
                              [-161.21, -154.405],
                              [-165.259, -155.674],
                              [-166.528, -151.626],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 2',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [-0.672, -0.265],
                            ],
                            o: [
                              [0, 0],
                              [0.334, 0.64],
                              [0, 0],
                            ],
                            v: [
                              [-45.638, 73.259],
                              [-48.297, 74.648],
                              [-46.738, 76.05],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 3',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [153.817, 151.863],
                              [152.717, 154.654],
                              [152.726, 154.657],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 4',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [160.872, 142.936],
                              [163.335, 141.224],
                              [163.332, 141.219],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 5',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [1.249, -0.393],
                              [0, -1.31],
                            ],
                            o: [
                              [0, 0],
                              [-0.75, -1.074],
                              [-1.25, 0.393],
                              [0, 0],
                            ],
                            v: [
                              [-45.638, -152.917],
                              [-43.178, -154.634],
                              [-46.538, -155.779],
                              [-48.638, -152.917],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 6',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-166.528, -151.626],
                              [-48.297, 74.648],
                              [-42.979, 71.869],
                              [-161.21, -154.405],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 7',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-46.738, 76.05],
                              [152.717, 154.654],
                              [154.917, 149.072],
                              [-44.538, 70.468],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 8',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [-2.1, -0.059],
                              [-1.488, 1.872],
                              [0.53, 1.981],
                              [1.652, 2.376],
                              [0, 0],
                              [-0.293, -1.095],
                              [-0.213, 0.268],
                              [1.194, 0.033],
                              [2.357, 0.921],
                            ],
                            o: [
                              [2.687, 1.05],
                              [2.045, 0.057],
                              [1.492, -1.876],
                              [-0.543, -2.031],
                              [0, 0],
                              [1.451, 2.087],
                              [0.306, 1.145],
                              [0.209, -0.263],
                              [-1.138, -0.032],
                              [0, 0],
                            ],
                            v: [
                              [152.726, 154.657],
                              [159.965, 156.385],
                              [165.804, 154.091],
                              [166.705, 147.876],
                              [163.335, 141.224],
                              [158.409, 144.649],
                              [160.909, 149.426],
                              [161.107, 150.358],
                              [160.132, 150.387],
                              [154.909, 149.068],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 9',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [163.332, 141.219],
                              [-43.178, -154.634],
                              [-48.098, -151.2],
                              [158.412, 144.653],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 10',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-48.638, -152.917],
                              [-48.638, 73.259],
                              [-42.638, 73.259],
                              [-42.638, -152.917],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'mm',
                        nm: 'Pfade zusammenführen 1',
                        mm: 1,
                      },
                      {
                        id: 'contour',
                        ty: 'fl',
                        nm: 'Fläche 1',
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                        r: 1,
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [236.175, 293.287],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                  {
                    ty: 'gr',
                    nm: 'Gruppe 4',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 1.656],
                              [1.656, 0],
                            ],
                            o: [
                              [1.656, 0],
                              [0, -1.657],
                              [0, 0],
                            ],
                            v: [
                              [17.384, 42.46],
                              [20.384, 39.46],
                              [17.384, 36.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 2',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-88.748, 25.508],
                              [-86.627, 27.63],
                              [-86.626, 27.628],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 3',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0.563, -0.563],
                            ],
                            o: [
                              [0, 0],
                              [-0.797, 0],
                              [0, 0],
                            ],
                            v: [
                              [-23.859, -39.46],
                              [-23.859, -42.46],
                              [-25.982, -41.58],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 4',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 1.657],
                              [1.656, 0],
                            ],
                            o: [
                              [1.656, 0],
                              [0, -1.656],
                              [0, 0],
                            ],
                            v: [
                              [94.372, -36.46],
                              [97.372, -39.46],
                              [94.372, -42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 5',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [17.384, 36.46],
                              [-82.975, 36.46],
                              [-82.975, 42.46],
                              [17.384, 42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 6',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0.294, 0.711],
                              [-3.679, 3.678],
                              [0, 0],
                              [-1.8, -4.348],
                              [-5.637, 0],
                            ],
                            o: [
                              [-5.2, 0],
                              [-0.295, -0.711],
                              [0, 0],
                              [-3.987, 3.987],
                              [1.799, 4.348],
                              [0, 0],
                            ],
                            v: [
                              [-82.975, 36.46],
                              [-90.028, 34.211],
                              [-86.627, 27.63],
                              [-90.87, 23.387],
                              [-95.572, 36.506],
                              [-82.975, 42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 7',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-86.626, 27.628],
                              [-21.737, -37.34],
                              [-25.982, -41.58],
                              [-90.871, 23.388],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'sh',
                        nm: 'Pfad 8',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [-23.859, -36.46],
                              [94.372, -36.46],
                              [94.372, -42.46],
                              [-23.859, -42.46],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'mm',
                        nm: 'Pfade zusammenführen 1',
                        mm: 1,
                      },
                      {
                        id: 'contour',
                        ty: 'fl',
                        nm: 'Fläche 1',
                        c: {
                          a: 0,
                          k: [0, 0.02, 0.126],
                        },
                        r: 1,
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [96.164, 179.731],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 3,
              },
              {
                ty: 4,
                nm: 'bird-wings-up-color',
                sr: 1,
                st: 0,
                op: 90,
                ip: 0,
                ln: '125',
                hasMask: false,
                ao: 0,
                ks: {
                  a: {
                    a: 0,
                    k: [221, 220.5, 0],
                  },
                  s: {
                    a: 0,
                    k: [400, 400, 400],
                  },
                  sk: {
                    a: 0,
                    k: 0,
                  },
                  p: {
                    a: 0,
                    k: [1040, 1040, 0],
                  },
                  r: {
                    a: 0,
                    k: 0,
                  },
                  sa: {
                    a: 0,
                    k: 0,
                  },
                  o: {
                    a: 0,
                    k: 100,
                  },
                },
                shapes: [
                  {
                    ty: 'gr',
                    nm: 'Gruppe 1',
                    it: [
                      {
                        ty: 'sh',
                        nm: 'Pfad 1',
                        d: 1,
                        ks: {
                          a: 0,
                          k: {
                            c: true,
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [-11.807, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [5.904, 9.839],
                              [0, 0],
                              [0, 0],
                              [4.878, -2.774],
                              [0, 0],
                              [0, 0],
                              [3.745, -3.7],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [-7.871, 7.871],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [9.839, 3.935],
                              [0, 0],
                              [0, 0],
                              [1.97, -5.254],
                              [0, 0],
                              [0, 0],
                              [-0.115, -5.263],
                              [0, 0],
                            ],
                            v: [
                              [-29.364, -90.601],
                              [-147.432, -90.601],
                              [-212.369, -25.664],
                              [-206.466, -11.889],
                              [-106.108, -11.889],
                              [-29.364, 135.696],
                              [169.384, 214.408],
                              [177.255, 204.569],
                              [112.318, 112.082],
                              [218.27, -170.419],
                              [209.685, -177.741],
                              [108.382, -120.118],
                              [106.393, -210.507],
                              [96.178, -214.643],
                            ],
                          },
                        },
                      },
                      {
                        ty: 'fl',
                        nm: 'Fläche 1',
                        c: {
                          a: 0,
                          k: [0.973, 0.518, 0.173],
                        },
                        r: 1,
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                      {
                        ty: 'tr',
                        a: {
                          a: 0,
                          k: [0, 0],
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                        },
                        sk: {
                          a: 0,
                          k: 0,
                        },
                        p: {
                          a: 0,
                          k: [217.092, 224.434],
                        },
                        r: {
                          a: 0,
                          k: 0,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                        },
                        o: {
                          a: 0,
                          k: 100,
                        },
                      },
                    ],
                  },
                ],
                ind: 4,
              },
            ],
          },
        ],
      },
      heightFixed: 'auto',
    };
  },
  created() {
    this.lottieFiles = {
      idle: JSON.parse(JSON.stringify(this.birdieNoflap)),
      fly: JSON.parse(JSON.stringify(this.birdieFlap)),
    };
  },
  mounted() {
    this.checkBreakpoint();

    window.addEventListener('resize', this.checkBreakpoint);
    document.addEventListener('form-ajax-submit', this.handleFormSubmit);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkBreakpoint);
    document.removeEventListener('form-ajax-submit', this.handleFormSubmit);
  },

  methods: {
    handleFormSubmit(event) {
      const formElement = this.$refs.form?.$el || this.$refs.form?.$refs?.root;
      if (event.detail?.target === formElement) {
        event.stopImmediatePropagation();
        this.handleSuccess();
      }
    },
    handleSuccess() {
      if (this.$refs.modalContent) {
        this.heightFixed = `${this.$refs.modalContent.clientHeight}px`;
      }
      this.success = true;
    },
    setIdle() {
      this.idle = !this.success;
    },

    checkBreakpoint() {
      this.isMobile = Tools.isBelowBreakpoint('lg');
      if (typeof window !== 'undefined' && window.visualViewport) {
        this.screenXS = window.visualViewport.height <= SCREEN_XS_THRESHOLD;
      }
    },
  },
};
</script>
