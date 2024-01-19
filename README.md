Nakshatra Tracker
===

This application is meant to show moon's position within a _nakṣatra_, an asterism, as defined in Hindu astrology.

Currently, the orientation of _nakṣatra_-s is the same as it would be when you were facing in the northern direction at the time of sunrise, typically 0655-0700.

**Pausha Shuklapaksha Navami, 2024**
---
Fixed issues with times and day changes. Version 1 of the application is ready. Will be live soon.


**Pausha Shuklapaksha Shashthi, 2024**
---
Several changes have been made to the tracker. An [ephemeris](https://en.wikipedia.org/wiki/Ephemeris) is used to track the calculations now and SVGs are used for the <em>nakṣatra</em> circle instead of an image. The application is more accurate than before and updates every second. This is still heavily work-in-progress and will not be released anytime soon, but much of the foundation is ready.


**Margashirsha Krishnapaksha Dashami, 2023**
---
The application is highly inaccurate and only shows the moon's passage through a _nakṣatra_ every hour, without considering the actual position of the moon in sky and in the relative area of _nakṣatra_. The _nakṣatra_-s have also been evenly placed, each _nakṣatra_-image being 256x256 pixels, hence depicting a very wrong distance and are not to scale.

The update is hourly since updating every second is currently pointless in a 2D-plane and also the value is too small for tracking and maintenance.

Following are the goals and to-dos:

• Publish the application

• Redefine the space between <em>nakṣatra</em>-s and moon so that it more accurate than it is right now

• Incorporate better calculations for accurate results

• Add proper labels and other relevant information for better navigation and readability

• Make the application 3D. Basically a Stellarium app with _only_ relevant Hindu stars
