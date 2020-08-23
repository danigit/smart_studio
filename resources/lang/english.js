languageController.$inject = ['$scope'];

function languageController($scope) {
    $scope.lang = {
        closeButton: 'Close',
        ip: 'IP',
        buildingName: 'Site',
        mac: 'Mac',
        type: 'Tipology',
        rssi: 'RSSI threshold',
        anchors: 'Anchors',
        xPos: 'x pos',
        yPos: 'y pos',
        zPos: 'z pos',
        floor: 'Floor',
        radius: 'Radius',
        proximity: 'Proximity',
        permittedAssets: 'Permitted assets',
        anchorState: 'Status',
        insertName: 'Insert name',
        insertXPos: 'Insert coord x',
        insertYPos: 'Insert y coord',
        insertZPos: 'Insert z coord',
        insertFloor: 'Insert floor',
        insertRadius: 'Insert radius',
        insertIp: 'Insert IP',
        insertProximity: 'Insert proximity',
        insertType: 'Insert tipology',
        insertValue: 'Insert value',
        deleteAnchor: 'Delete Anchor',
        noResultFound: 'No results found',
        addAnchor: 'Add Anchor',
        activeAllarms: 'Active alarms',
        offlineTags: 'WeTag issues',
        offlineAnchors: 'Anchor issues',
        evacuationState: 'Evacuation state',
        modifyPageSettings: 'Edit page settings',
        drawVerticalLine: 'Draw vertical lines',
        drawHorizontalLine: 'Draw horizontal lines',
        drawInclinedLine: 'Draw oblique lins',
        deleteLine: 'Delete lines',
        changeAnchorPosition: 'Place / Move Anchors',
        save: 'Save',
        menu: 'Menu',
        home: 'Home',
        weTagTable: 'WeTag management',
        anchorsTable: 'Anchor management',
        floorTable: 'Floor management',
        history: 'History',
        changePassword: 'Change password',
        logout: 'Logout',
        searchWetag: 'Find WeTag',
        selectFloor: 'Select floor',
        gridSpacing: 'Grid spacing',
        grid: 'Grid',
        fullscreen: 'Fullscreen',
        cameras: 'Cameras',
        drawingMode: 'Drawing mode',
        oldPassword: 'Old password',
        insertOldPassword: 'Type old password',
        newPassword: 'New password',
        insertNewPassword: 'Type new password',
        reinsertNewPassword: 'Retype new password',
        safeAreaPersons: 'Workers in safe',
        notSafeAreaPersons: 'Workers in danger',
        floors: 'Floors',
        name: 'Name',
        lengthValue: 'Lenght (m)',
        insertLength: 'Type lenght',
        insertSpacing: 'Type spacing',
        selectImage: 'Load custom icon',
        selectMap: 'Load custom map',
        spacing: 'Spacing (m)',
        addFloor: 'Add floor',
        filter: 'Filter',
        selectDate: 'Select data',
        anything: 'Any',
        date: 'Data',
        event: 'Event',
        tag: 'WeTag',
        anchor: 'Anchor',
        site: 'Site',
        noData: 'No dato available',
        sitesTable: 'Site management',
        versions: 'Versions',
        onlineAnchors: 'Online anchors',
        areOnlineAnchors: 'Anchors are connected',
        areOfflineAnchors: 'Anchors have problems',
        wetagState: 'WeTags state',
        onlineTags: 'Online WeTags',
        areOnlineTags: 'WeTags are connected',
        areOfflineTags: 'WeTags are offline',
        lostTags: 'Lost / offline WeTags',
        areLostTags: 'WeTags are lost or offline',
        shutdownTags: 'Switched off WeTags',
        areShutdownTags: 'WeTags are switched off',
        insertRssi: 'Type RSSI',
        neighbors: 'Neighbours',
        searchAnchor: 'Find Anchors...',
        permitted: 'Permitted WeTags',
        searchTag: 'Find WeTags...',
        insertAnchor: 'Add Anchor',
        insertingAnchor: 'Add Anchor',
        insertingFloor: 'Add floor',
        insertingSite: 'Add site',
        description: 'Description',
        insertDescription: 'Type description',
        latitude: 'Latitudine',
        insertLatitude: 'Inserire latitudine',
        longitude: 'Longitude',
        insertLongitude: 'Type longitude',
        coverInGrades: 'Raggio in °',
        coverInMeters: 'Raggio in metri',
        isIndoor: 'Indoor site',
        insertSite: 'Add site',
        insertingMac: 'Add MAC',
        insertMac: 'Add MAC',
        addMac: 'Add MAC',
        nothing: 'Nothing',
        insertingTag: 'Add WeTag',
        insertTag: 'Add WeTag',
        sites: 'Sites',
        addSite: 'Add site',
        username: 'Username',
        insertUsername: 'Type username',
        password: 'Password',
        insertPassword: 'Type password',
        userNotRegisteredOrWrongPassword: 'Wrong password or user not registered',
        noServerCommunication: 'Unable to communicate with the server',
        closedSocket: 'Socket closed',
        recoverPassword: 'Password recovery',
        selectAnchor: 'Select Anchor',
        batteryLevel: 'Battery',
        wetagType: 'WeTag tipology',
        tagState: 'WeTag state',
        addTag: 'Add WeTag',
        macsManaging: 'MACs',
        tagNotFound: 'WeTag not found',
        tagNotLoggedUser: 'This WeTAG is located in a site not belong to the user!',
        evacuationZonePersons: 'Workers into evacuation zone',
        disapearedPersons: 'Lost workers',
        deleteSite: 'Delete site',
        okDeleteSite: 'Are you sure deleting the site?',
        cancel: 'Cancel',
        passwordDontMatch: 'Password mismatch!',
        invalidOld: 'Old password not valid',
        impossibleChangePassword: 'Unable to change the password!',
        passwordChanged: 'Password correctly changed!',
        deleteMac: 'Delete MAC',
        okDeleteMac: 'Are you sure deleting the MAC?.',
        impossibleInsertFloor: 'Unable to add the floor.',
        floorInsertedWithoutImage: 'Floor added with default image',
        floorInserted: 'Floor succesfully added',
        tagNotInitialized: 'This weTAG has not been localized yet!',
        enabledTags: 'WeTags active',
        disabledAnchors: 'Disabled Anchors',
        enabledAnchors: 'Active anchors',
        from: 'From',
        to: 'to',
        eventType: 'Event',
        version: 'Version',
        drawZone: 'Draw zones',
        deleteZone: 'Delete zones',
        modifyZone: 'Edit zones',
        zoneTable: 'Zone Management',
        zone: 'Zone',
        quickActions: 'Settings',
        selectGridSpacing: 'Select spacing grid value',
        draw: 'Draw',
        showHideDraw: 'Show/hide drawing tools',
        showHideFullscreen: 'Show/hide fullscreen',
        lostPersons: 'Lost workers',
        userManager: 'User management',
        location: 'Site',
        locations: 'Sites',
        openSite: 'Go to site',
        insertLocation: 'Add site',
        email: 'Email',
        insertEmail: 'Add email',
        insertValidEmail: 'Add a valid email',
        emailNotRegistered: 'Email not registered',
        recoverPasswordText: 'A verification code will be sent to you at the email address entered. The email address must be associated with a Smart Studio account!',
        code: 'Code',
        insertCode: 'type code received by email',
        confirmPassword: 'Confirm password',
        reinsertPassword: 'Retype password',
        resetPassword: 'Reset password',
        xLeft: 'X LEFT',
        xRight: 'X RIGHT',
        yUp: 'Y UP',
        yDown: 'Y DOWN',
        insertColor: 'Add color',
        searchLocation: 'Find site',
        shutDownAnchors: 'Anchors with low battery',
        areShutDownAnchors: 'Anchors are offline',
        online: 'Online',
        offline: 'Offline',
        batteryStatus: 'Battery',
        tagType: 'Type',
        tagAlarms: 'WeTag alarms',
        tagsAlarms: 'WeTags alarms',
        audio: 'Audio',
        zones: 'Zone',
        outLocationTags: 'Out of site',
        showTableSorting: 'Sorting',
        showOutdoorTagsLabel: 'Team',
        deleteHistory: 'Delete history',
        wetagsGroup: 'WeTag group',
        adminUser: 'Administrator',
        intermediateUser: 'Intermediate',
        genericUser: 'Generic',
        trackerUser: 'Tracker',
        zonesManaging: 'Zone',
        insertZone: 'Add zone',
        insertZoneName: 'Zone name',
        insertZoneXLeft: 'X Left',
        insertZoneXRight: 'X Right',
        insertZoneYUp: 'Y Up',
        insertZoneYDown: 'Y Down',
        insertZoneRadius: 'Radius',
        insertZoneColor: 'Select color',
        noZoneAvailable: 'Zones not available',
        engineOff: 'Location Engine off',
        outdoorRectDrawing: 'Rect',
        outdoorRoundDrawing: 'Circle',
        xCenter: 'Center x',
        yCenter: 'Center y',
        color: 'Colour',
        saveConfiguration: 'Save settings',
        manageLocation: 'Sites management',
        muteAlarm: 'Mute alarms',
        silentiating: 'Im muting alarms ...',
        insertUser: 'User adding',
        parameters: 'parameters',
        advertisementRate: 'Advertisement',
        powerLevel: 'Power Level',
        disableTiming: 'Disable timing',
        alarmTiming: 'Pre alarm timing',
        noMovTiming: 'No movement timing',
        manDownMode: 'Man down mode',
        keepAliveTimer: 'Keep Alive',
        scanningTimer: 'Scanning timing',
        lndPrtTimer: "LND/PRT timing",
        scanningBeacons: 'Scanning Pkt',
        freefallRate: 'Freefall range',
        simOn: 'Sim onboard',
        wifiOn: 'WiFi onboard',
        advSatOn: 'Adv/Sat onboard',
        macFilter: 'MAC filter',
        apnOperator: 'APN operator',
        apnCode: 'APN code',
        restName: 'REST name',
        serverIp: 'IP Server',
        ssidWiFi: 'SSID WiFi',
        pwdWiFi: 'Password WiFi',
        ipGatewayWiFi: 'IP Gateway WiFi',
        ipWetagWiFi: 'IP WeTAG WiFi',
        geofenceThd: 'Geofence thd',
        macUwb: 'MAC UWB',
        geofencePort: 'UWB UDP port',
        openMenu: 'Open menu',
        phoneNumber: 'Numero di telefono',
        addEmail: 'Aggiungi email',
        insertBootUrl: 'Inserisci l\'url del boot',
        insertChatId: 'Inserisci l\'id dellla chat',
        insertWebUrl: 'Inserisci l\'url del web',
        addLocation: 'Add location',
        deleteLocation: 'Delete location',
        addZone: 'Add zone',
        deleteUser: 'Delete user',
        centerMap: 'Center the map',
        role: 'Role',
        legend: "Legend",
        image: 'Image',
        meaning: 'Meaning',
        safe_tag_meaning: '',
        safe_tag_description: '',
        safe_tags_meaning: '',
        safe_tags_description: '',
        alarm_tag_meaning: '',
        alarm_tag_description: '',
        sos_tag_meaning: '',
        sos_tag_description: '',
        low_battery_tag_meaning: '',
        low_battery_tag_description: '',
        out_location_tag_meaning: '',
        out_location_tag_description: '',
        men_down_tacited_tag_meaning: '',
        men_down_tacited_tag_description: '',
        men_down_disabled_tag_meaning: '',
        men_down_disabled_tag_description: '',
        prohibited_tag_zone_tag_meaning: '',
        prohibited_tag_zone_tag_description: '',
        quote_change_tag_meaning: '',
        quote_change_tag_description: '',
        not_dpi_glove_tag_meaning: '',
        not_dpi_glove_tag_description: '',
        not_dpi_helmet_tag_meaning: '',
        not_dpi_helmet_tag_description: '',
        not_dpi_belt_tag_meaning: '',
        not_dpi_belt_tag_description: '',
        not_dpi_mask_tag_meaning: '',
        not_dpi_mask_tag_description: '',
        mixt_tags_safe_alarm_meaning: '',
        mixt_tags_safe_alarm_description: '',
        lost_tag_meaning: '',
        lost_tag_description: '',
        mixt_tags_safe_lost_meaning: '',
        mixt_tags_safe_lost_description: '',
        mixt_tags_lost_alarm_meaning: '',
        mixt_tags_lost_alarm_description: '',
        mixt_tags_all_meaning: '',
        mixt_tags_all_description: '',
        lost_tags_meaning: '',
        lost_tags_description: '',
        alarm_tags_meaning: '',
        alarm_tags_description: '',
        online_anchor_meaning: '',
        online_anchor_description: '',
        offline_anchor_meaning: '',
        offline_anchor_description: '',
        indoor_location_meaning: '',
        indoor_location_description: '',
        outdoor_location_meaning: '',
        outdoor_location_description: '',
        alarm_symbol_meaning: '',
        alarm_symbol_description: '',
        anchor_alarm_symbol_meaning: '',
        anchor_alarm_symbol_description: '',
        engine_alarm_meaning: '',
        engine_alarm_description: '',
        wetag_alarm_meanig: '',
        wetag_alarm_description: '',
        alarm_tags_home_meaning: '',
        alarm_tags_home_description: '',
        loopSound: 'Suono perpetuo',
        tacitation_mode: 'Tacitazione',
        time: '',
        gpsTime: '',
        alarmTime: '',
        lnd_prt_angle: '',
        tagCategory: '',
        addTagCategory: '',
        tagCategories: '',
        insertingTagCategory: '',
        insertTagCategory: '',
        alertImage: '',
        noAlertImage: '',
        deleteCategory: '',
        categoryTags: '',
        safetyBox: '',
        safetyBoxTable: '',
        imei: '',
        insertImei: '',
        addSafetyBox: '',
        deleteSafetyBox: '',
        insertSafetyBoxTitle: '',
        insertSafetyBox: '',
        saveHistory: '',
        protocol: '',
        beaconType: '',
        tracking: '',
        trackingTable: '',
        priority: '',
        headerOrder: '',
        headerLeftSide: '',
        openLegend: '',
        categoryLegend: '',
        userTableTitle: '',
        standByMode: 'Standby Mode',
        updateVersion: '',
        insertVersion: '',
        versionNotFound: '',
        manageRfid:  '',
        selectRfid: '',
        rfidTable: '',
        deleteRfid: '',
        addRfid: '',
        insertRfid: '',
        number: '',
        insertNumber: '',
        selectElement: '',
        insert_multiple_tags: 'Inserire tag multipli',
        tag_number: 'Inserire numero di tag',
        anchors_number: 'Inserire il numero di ancore',
        insert_multiple_anchors: 'Inserire anore multiple',
        batteryEmptyTags: 'Wetags batteria scarica',
        areBatteryEmptyTags: 'wetags sono scarichi',
        uwb: '',
        bluetooth: '',
        offlineImage: ''
    }
}

let lang = {
    sos: 'SOS',
    helpRequest: 'Help request',
    manDown: 'Man down',
    batteryEmpty: 'Low battery',
    helmetDpi: 'PPE helmet',
    beltDpi: 'PPE belt',
    gloveDpi: 'PPE gloves',
    shoeDpi: 'PPE shoes',
    manDownDisabled: 'Man down disabled',
    manDownTacitated: 'Man down tacitated',
    manInQuote: 'Man in quote',
    callMeAllarm: 'Call me',
    changePassword: 'Change password',
    passwordNotEqual: 'The password must be the same',
    oldPasswordNotValid: 'Old password not valid',
    tagOutSite: 'Out of site',
    personInEvacuationZone: 'Workers located in evacuation zone',
    lostPersons: 'Lost workers',
    insertValue: 'Type value',
    positionInsertedWithoutImage: 'Position inserted with default icon',
    impossibleToInsertPosition: 'Unable to add the position.',
    positionInserted: 'Position succesfully added',
    cancelUser: 'Delete user',
    cancelUserText: 'Are you sure deleting this user?',
    cancel: 'Cancel',
    userInserted: 'User succesfully registered',
    canInsertUser: 'Unable to add the user',
    users: 'Users',
    deleteLocation: 'Delete site',
    deleteLocationText: 'Are you sure deleting this site?',
    deleteZone: 'Delete zone',
    deleteZoneText: 'Are you sure deleting this zone?',
    genericUser: { userName: 'Generic user', userValue: 0 },
    intermediateUser: { userName: 'Intermediate user', userValue: 2 },
    trackerUser: { userName: 'Tracker user', userValue: 3 },
    invalidOld: 'Old password not valid',
    impossibleChangePassword: 'Unable to change password',
    passwordChanged: 'Password succesfully changed',
    dkDeleteTag: 'Are you sure delting this WeTag?',
    deleteMac: 'Delete MAC',
    okDeleteMac: 'Are you sure deleting this MAC?',
    okDeleteZone: 'Are you sure delting this zone?',
    shutdownTags: 'Switched off WeTags',
    activeTags: 'Active WeTags',
    disabledTags: 'Disabled WeTags',
    lostTags: 'Lost WeTags',
    deleteSite: 'Delete site',
    okDeleteSite: 'Are you sure deleting this site?',
    deleteTag: 'Cancella WeTag',
    okDeleteTag: 'Are you sure deleting this WeTag?',
    deleteAnchor: 'Delete Anchor',
    okDeleteAnchor: 'Are you sure deleting this Anchor.',
    deleteFloor: 'Delete floor',
    okDeleteFloor: 'Are you sure deleting this floor?',
    selectFloorFile: 'Select a floor image',
    tagNotFound: 'WeTag not found',
    tagNotLoggedUser: 'This WeTAG is located in a site not belong to the user!',
    noLocation: 'No location',
    noValidPosition: '',
    noValidPositionDescription: '',
    insideZone: 'Tag in prohibited area',
    unableToSaveData: 'Unable to save data',
    dataSavedSuccessfully: 'Data succesfully saved',
    dataSaved: 'Data saved',
    actionCanceled: 'Operation aborted',
    noPosition: 'No position',
    outOfSite: '',
    outOfSiteDescription: '',
    drawingSaved: 'Drawing saved',
    drawingNotSaved: 'Drawing not saved',
    tagCategorySelectImage: '',
    cannotConvertImage: '',
    cannotSaveImage: '',
    deleteCategory: '',
    deleteSafetyBox: '',
    deleteSafetyBoxText: '',
    initEvacuation: '',
    reset: '',
    callMe: '',
    stopCallMe: '',
    disabledAnchors: '',
    enabledAnchors: '',
    shutDownAnchors: '',
    entering: '',
    locationNotSaved: '',
    zoneFloorUpdated: '',
    zoneFloorDeleted: '',
    zoneFloorNotUpdated: '',
    zoneFloorNotDeleted: '',
    headerZonesNotSetted: '',
    invalidAutomation: '',
    impossibleRecoverTagCategories: '',
    noCause: '',
    freefall: '',
    lndPrt: '',
    noMov: '',
    ble: '',
    wifi: '',
    gprs: '',
    safetyBox: '',
    elementDeleted: '',
    elementNotDeleted: '',
    impossibleDeleteLocation: '',
    fieldChanged: '',
    fieldNotChanged: '',
    login: '',
    tagOff: '',
    elementInserted: '',
    elementNotInserted: '',
    userDeleted: '',
    userNotDeleted: '',
    columns: '',
    locations: '',
    anchors: '',
    latitude: '',
    longitude: '',
    deleteRfid: '',
    deleteRfidText: '',
    elementsNotRetrieved: '',
    batteryEmtpyTags: 'Wetag scarichi',
    selectTagType: '',
    selectValidType: ''
};