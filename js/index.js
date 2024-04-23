this.hasAnimateOnScrollElements = $('[data-aos]').length !== 0;
this.aosRefreshed = false;
if (this.hasAnimateOnScrollElements && !this.aosRefreshed && AOS !== undefined) {
    this.aosRefreshed = true;
    AOS.refresh();
}