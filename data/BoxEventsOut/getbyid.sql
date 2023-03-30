SELECT [BoxId]
    ,[Vendor]
    ,[VendorName]
    ,[Trandate]
FROM [dbo].[CtrlBox_Out]
WHERE [BoxId]=@BoxId