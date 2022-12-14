# Anglo BI Dashboard Design:
*This README.md document aims to give the reader insight and documentation on how to best utilise Anglo American's Design System in the supported data visualisation tools which include Microsoft PowerBI desktop and service. 

# Requirements
  * Microsoft PowerBI Service/ Desktop
  * A Modern Web Browser such as Google Chrome or Microsoft Edge
  
# How to view and make changes to a visual's code:
  *Navigate to the top directory titled (AngloDesignSystem)
  
  *Then navigate to the preferred directory, your structure should be similar to what's below:
  
![image](https://user-images.githubusercontent.com/117455383/207598299-a98fff38-ad1d-4e57-a63e-74c31c16b120.png)

  *Visual and aesthetic changes are made in the visual.less file, found in your style foler.
  *While logic changes are made to the visual.ts file 
   
  
    
  # How to view changes to a visual's code:
  * Start your preferred CLI, such as Windows Powershell or CMD
  * Start your local server by typing the below command and pressing the enter key
  
```bash
pbiviz start
```
  * Visit the following url once the command successfully runs --> https://localhost:8080/assets/
  * Ensure that PowerBI service has developer mode enabled
  * Click the following icon 
  
  ![image](https://user-images.githubusercontent.com/117455383/207599357-f73af2f0-5bfe-4d76-84c7-aed011f6bcdb.png)
  
  * Then, finally assign data to that specific visual in order to see changes. 
  
  #Repackage app for PowerBI desktop consumption
  
  * Ensure that you are in the app's root directory as shown above
  
  * Navigate to the package.json file and change the display name and icon, if necessary. Tip: The icon is in the assets folder
  
  * Finally, run the below command
  
  ```bash
pbiviz package
```
  * Your app will then successfully repackage
  
  * Open PowerBI Desktop
  
  * Click on import visual from file as seen below:

![image](https://user-images.githubusercontent.com/117455383/207600726-0a8c1104-6282-44cc-9917-4f17f780266b.png)

  * Then navigate to your dist folder and select your PBIVIZ file. 
  
  * A success message will be displayed, allowing you to use/ test your visual

