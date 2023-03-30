UPDATE [dbo].[CtrlBox_Out]
SET   [Vendor]=@Vendor,
      [VendorName]=@VendorName,
      [TranDate]=@TranDate
WHERE [BoxId]=@BoxId

SELECT [BoxId]
      ,[Vendor]
      ,[VendorName]
      ,[TranDate]
  FROM [dbo].[CtrlBox_Out]
  WHERE [BoxId]=@BoxId