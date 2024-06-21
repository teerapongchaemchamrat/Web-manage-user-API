INSERT INTO [dbo].[computer](
    [user_id],
    [company],
    [case_brand],
    [case_model],
    [case_service],
    [moniter_brand],
    [moniter_service],
    [moniter_serial],
    [key_brand],
    [key_serial],
    [mouse_brand],
    [mouse_serial],
    [os],
    [office_version],
    [office_key],
    [office_acc],
    [office_pass],
    [location],
    [create_by],
    [status]
)

VALUES (
    @user_id,
    'BTC',
    @case_brand,
    @case_model,
    @case_service,
    @moniter_brand,
    @moniter_service,
    @moniter_serial,
    @key_brand,
    @key_serial,
    @mouse_brand,
    @mouse_serial,
    @os,
    @office_version,
    @office_key,
    @office_acc,
    @office_pass,
    @location,
    @create_by,
    1
)